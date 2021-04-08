import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EventEmitter2 } from 'eventemitter2';
import { Model } from 'mongoose';
import {
    DomainEvent,
    DomainEventStatus,
    DomainEventType,
} from 'src/domain-events/schemas/domain-event.schema';
import { MappersService } from 'src/mappers/mappers.service';
import { SubscriberDto } from './dto/subscriber.dto';
import { Subscriber, SubscriberDocument } from './schemas/subscriber.schema';
import fetch from 'node-fetch';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class SubscribersService {
    constructor(
        @InjectModel(Subscriber.name)
        private subscriberModel: Model<SubscriberDocument>,
        @Inject(forwardRef(() => MappersService))
        private mappersService: MappersService,
        private eventEmitter: EventEmitter2,
    ) {}

    async create(subscriberDto: SubscriberDto): Promise<Subscriber> {
        const subscriber = new this.subscriberModel(subscriberDto);
        return subscriber.save();
    }

    async findAll(offset: string, limit: string): Promise<Subscriber[]> {
        return this.subscriberModel
            .find()
            .skip(parseInt(offset))
            .limit(parseInt(limit))
            .exec();
    }

    async getById(id: string): Promise<Subscriber> {
        const subscriber: Subscriber | null = await this.subscriberModel
            .findById(id)
            .exec();
        if (!subscriber) {
            throw new NotFoundException();
        }
        return subscriber;
    }

    // async update(
    //     id: string,
    //     subscriberDto: SubscriberDto,
    // ): Promise<Subscriber> {
    //     console.log(subscriberDto);
    //     return this.subscriberModel
    //         .findByIdAndUpdate(id, subscriberDto, {
    //             useFindAndModify: true,
    //         })
    //         .then((result) => <Subscriber>result);
    // }

    async delete(id: string): Promise<void> {
        this.subscriberModel.findByIdAndRemove(id);
    }

    async findAllByPublisherId(id: string): Promise<SubscriberDocument[]> {
        return this.subscriberModel.find({'subscribedTo.publisherId': id});
    }

    async removeAllSubscriptionsWithMapper(mapperId: string): Promise<void> {
        return this.subscriberModel.find({'subscribedTo.mapperId': mapperId}).then((subscribers: SubscriberDocument[]) => {
                subscribers.forEach((subscriber: SubscriberDocument) => {
                    subscriber.subscribedTo = subscriber.subscribedTo.filter((subscriberPublisher) => subscriberPublisher.mapperId !== mapperId);
                    subscriber.save();
                })
        });
    }

    async sendWebhook(
        payload: unknown,
        subscriber: Subscriber,
    ): Promise<Response> {
        const data = JSON.stringify(payload);
        return fetch(subscriber.webhookUrl, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data || '', 'utf-8'),
            },
        });
    }

    async notifySubscriber(
        publishEvent: DomainEvent,
        subscriber: SubscriberDocument,
    ): Promise<void> {
        const mapperId = subscriber.subscribedTo.find(
            (subscribedTo) =>
                publishEvent.publisherId === subscribedTo.publisherId,
        ).mapperId;
        try {
            this.mappersService.getById(mapperId).then(async (mapper) => {
                const newObject = this.mappersService.mapPayloadToFormat(
                    publishEvent.payload,
                    mapper.format,
                );
                this.sendWebhook(newObject, subscriber).then(
                    async (response) => {
                        this.eventEmitter.emit(
                            DomainEventType.Sent,
                            new DomainEvent(
                                DomainEventType.Sent,
                                response.status < 300
                                    ? DomainEventStatus.Success
                                    : DomainEventStatus.Error,
                                newObject,
                                publishEvent.publisherId,
                                subscriber._id,
                                response.status < 300
                                    ? null
                                    : await response.text(),
                                publishEvent,
                            ),
                        );
                    },
                );
            });
        } catch (exception) {
            this.eventEmitter.emit(
                DomainEventType.Sent,
                new DomainEvent(
                    DomainEventType.Sent,
                    DomainEventStatus.Error,
                    {},
                    publishEvent.publisherId,
                    subscriber._id,
                    exception.response,
                ),
            );
            throw new BadRequestException(exception.response);
        }
    }

    async notifySubscribers(
        publishEvent: DomainEvent,
        subscribers: SubscriberDocument[],
    ): Promise<void> {
        subscribers.forEach(async (sub) => {
            await this.notifySubscriber(publishEvent, sub);
        });
    }
}
