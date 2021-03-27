import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
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

@Injectable()
export class SubscribersService {
    constructor(
        @InjectModel(Subscriber.name)
        private subscriberModel: Model<SubscriberDocument>,
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

    async findAllByPublisherId(id: string): Promise<Subscriber[]> {
        return this.subscriberModel.find({ 'subscribedTo.publisherId': id });
    }

    notifySubscriber(publishEvent: DomainEvent, subscriber: Subscriber): void {
        const mapperId = subscriber.subscribedTo.find(
            (subscribedTo) =>
                publishEvent.publisherId === subscribedTo.publisherId,
        ).mapperId;
        try {
            this.mappersService.getById(mapperId).then((mapper) => {
                try {
                    const newObject = this.mappersService.mapPayloadToFormat(
                        publishEvent.payload,
                        mapper.format,
                    );
                    //if successful
                    this.eventEmitter.emit(
                        DomainEventType.Sent,
                        new DomainEvent(
                            DomainEventType.Sent,
                            DomainEventStatus.Success,
                            newObject,
                            publishEvent.publisherId,
                            subscriber.id,
                        ),
                    );
                    console.log(newObject);
                } catch (exception) {
                    throw new InternalServerErrorException(
                        'Could not transform',
                    );
                }
            });
        } catch (exception) {
            throw new BadRequestException(exception.response);
        }
    }

    async notifySubscribers(
        publishEvent: DomainEvent,
        subscribers: Subscriber[],
    ): Promise<void> {
        subscribers.forEach((sub) => {
            this.notifySubscriber(publishEvent, sub);
        });
    }
}
