import { Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { SubscribersService } from 'src/subscribers/subscribers.service';
import { DomainEventsService } from './domain-events.service';
import { PublisherTotalsDto } from './dto/publisher-totals.dto';
import { DomainEvent, DomainEventDocument } from './schemas/domain-event.schema';

@Controller('domain-events')
@ApiTags('DomainEvents')
export class DomainEventsController {
    constructor(
        private readonly domainEventsService: DomainEventsService,
        private readonly subscribersService: SubscribersService,
        ) {}

    @Get('/publisher/:publisherId/totals')
    getTotals(@Param('publisherId') id: string): Promise<PublisherTotalsDto> {
        if (!Types.ObjectId.isValid(id)) {
            throw new NotFoundException();
        }
        return this.domainEventsService.getPublisherTotals(id);
    }

    @Get('/publisher/:publisherId/published-webhooks')
    getPublishedWebhooks(
        @Param('publisherId') id: string,
    ): Promise<DomainEvent[]> {
        if (!Types.ObjectId.isValid(id)) {
            throw new NotFoundException();
        }
        return this.domainEventsService.getPublishedWebhooksByPublisher(id);
    }

    @Get('/subscriber/:subscriberId/received-webhooks')
    getSubscribedWebhooks(
        @Param('subscriberId') id: string,
    ): Promise<DomainEvent[]> {
        if (!Types.ObjectId.isValid(id)) {
            throw new NotFoundException();
        }
        return this.domainEventsService.getReceivedWebhooksBySubscriber(id);
    }

    @Post('/retry/:domainEventId')
    resendWebhook(@Param('domainEventId') id: string): Promise<DomainEvent> {
        if (!Types.ObjectId.isValid(id)) {
            throw new NotFoundException();
        }
        return this.domainEventsService.getById(id).then(async (domainEvent: DomainEventDocument) => {
            const prevEvent = domainEvent.prevEvent;
            const splitId = ((<DomainEventDocument>prevEvent)._id).toString().split('_');
            const newId = splitId[0].concat(splitId.length > 1 ? '_'.concat((parseInt(splitId[1]) + 1).toString()) : '_1');
            (<DomainEventDocument>prevEvent)._id = newId;
            this.subscribersService.notifySubscriber(prevEvent, await this.subscribersService.getById(domainEvent.subscriberId));
            return this.domainEventsService.getByPrevEventId(newId);
        })
    }
}
