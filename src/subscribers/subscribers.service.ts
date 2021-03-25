import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubscriberDto } from './dto/subscriber.dto';
import { Subscriber, SubscriberDocument } from './schemas/subscriber.schema';

@Injectable()
export class SubscribersService {
    constructor(
        @InjectModel(Subscriber.name)
        private subscriberModel: Model<SubscriberDocument>,
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

    async update(
        id: string,
        subscriberDto: SubscriberDto,
    ): Promise<Subscriber> {
        return this.subscriberModel
            .findByIdAndUpdate(id, subscriberDto, {
                useFindAndModify: true,
            })
            .then((result) => <Subscriber>result);
    }

    async delete(id: string): Promise<void> {
        this.subscriberModel.findByIdAndRemove(id);
    }
}
