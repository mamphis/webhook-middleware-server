import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
    DomainEvent,
    DomainEventDocument,
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
}