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
        return this.domainEventModel
            .findOne({
                'prevEvent._id': id,
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

    normalizeWebhookPayload = (payload: any): any => {
        for (const prop in payload) {
            const json = this.stringToJson(payload[prop]);
            if (json) {
                payload[prop] = json;
                this.normalizeWebhookPayload(payload[prop]);
            }
        }
        return payload;
    };

    stringToJson = (str: string): boolean => {
        try {
            return JSON.parse(str);
        } catch (e) {
            return false;
        }
    };

    getCount(
        from: string | null,
        to: string | null,
        _type: string | null,
    ): Promise<number> {
        return this.domainEventModel
            .find({
                ...((from || to) && {
                    createdAt: {
                        ...(from && { $gte: new Date(from) }),
                        ...(to && { $lte: new Date(to) }),
                    },
                }),
                ...(_type && { type: _type }),
            })
            .count()
            .exec();
    }

    getAverageExecutionTime(): Promise<number> {
        return this.domainEventModel
            .aggregate([
                {
                    $match: {
                        type: DomainEventType.Sent,
                        executionTime: {
                            $ne: null,
                        },
                    },
                },
                {
                    $group: {
                        _id: null,
                        average: {
                            $avg: '$executionTime',
                        },
                    },
                },
            ])
            .exec();
    }

    getExecutionTimes(
        from: string | null,
        to: string | null,
    ): Promise<DomainEvent[]> {
        return this.domainEventModel
            .find({
                executionTime: {
                    $ne: null,
                },
                createdAt: {
                    $gt: new Date(from),
                    $lt: new Date(to),
                },
            })
            .exec();
    }
}
