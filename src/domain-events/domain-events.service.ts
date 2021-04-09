import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PublisherTotalsDto } from './dto/publisher-totals.dto';
import {
    DomainEvent,
    DomainEventDocument,
    DomainEventType,
} from './schemas/domain-event.schema';

@Injectable()
export class DomainEventsService {
    constructor(
        @InjectModel(DomainEvent.name)
        private domainEventModel: Model<DomainEventDocument>,
    ) {}

    async create(event: DomainEvent): Promise<DomainEvent> {
        const newEvent = new this.domainEventModel(event);
        return newEvent.save();
    }

    async findAll(offset: string, limit: string): Promise<DomainEvent[]> {
        return this.domainEventModel
            .find()
            .skip(parseInt(offset))
            .limit(parseInt(limit))
            .exec();
    }

    async getById(id: string): Promise<DomainEvent> {
        const event: DomainEvent | null = await this.domainEventModel
            .findById(id)
            .exec();
        if (!event) {
            throw new NotFoundException();
        }
        return event;
    }

    async getByPrevEventId(id: string): Promise<DomainEvent> {
        return this.domainEventModel.findOne({
                'prevEvent._id': id
            })
            .exec();
    }

    async getPublisherTotals(id: string): Promise<PublisherTotalsDto> {
        const _totalWebhooksPublished = await this.domainEventModel
            .find({
                publisherId: id,
                type: DomainEventType.Received,
            })
            .count()
            .exec();
        return {
            totalWebhooksPublished: _totalWebhooksPublished,
        };
    }

    async getPublishedWebhooksByPublisher(id: string): Promise<DomainEvent[]> {
        return this.domainEventModel
            .find({
                publisherId: id,
                type: DomainEventType.Received,
            })
            .sort({
                createdAt: 'desc',
            })
            .limit(10)
            .exec();
    }

    async getReceivedWebhooksBySubscriber(id: string): Promise<DomainEvent[]> {
        return this.domainEventModel
            .find({
                subscriberId: id,
                type: DomainEventType.Sent,
            })
            .sort({
                createdAt: 'desc',
            })
            .limit(10)
            .exec();
    }
}
