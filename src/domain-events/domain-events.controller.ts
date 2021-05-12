import {
    Controller,
    Get,
    NotFoundException,
    Param,
    Post,
    UseGuards,
    Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { SubscribersService } from 'src/subscribers/subscribers.service';
import { DomainEventsService } from './domain-events.service';
import { PublisherTotalsDto } from './dto/publisher-totals.dto';
import {
    DomainEvent,
    DomainEventDocument,
    DomainEventStatus,
    DomainEventType,
} from './schemas/domain-event.schema';
import type { DayCount } from './domain-events.service';
@UseGuards(AuthGuard('jwt'))
@Controller('domain-events')
@ApiTags('DomainEvents')
export class DomainEventsController {
    constructor(
        private readonly domainEventsService: DomainEventsService,
        private readonly subscribersService: SubscribersService,
    ) {}

    @Get('/')
    get(
        @Query('offset') offset: string = null,
        @Query('limit') limit: string = null,
        @Query('type') type: DomainEventType = null,
        @Query('searchQuery') searchQuery: string = null,
        @Query('searchProperty') searchProperty: string = null,
        @Query('status') status: DomainEventStatus = null,
        @Query('orderField') orderField: string = null,
        @Query('orderDirection') orderDirection: string = null,
    ): Promise<DomainEvent[]> {
        return this.domainEventsService.findBy({
            offset,
            limit,
            type,
            searchQuery,
            searchProperty,
            status,
            orderField,
            orderDirection,
        });
    }

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
        return this.domainEventsService
            .getById(id)
            .then(async (domainEvent: DomainEventDocument) => {
                const prevEvent = domainEvent.prevEvent;
                const splitId = (<DomainEventDocument>prevEvent)._id
                    .toString()
                    .split('_');
                const newId = splitId[0].concat(
                    splitId.length > 1
                        ? '_'.concat((parseInt(splitId[1]) + 1).toString())
                        : '_1',
                );
                (<DomainEventDocument>prevEvent)._id = newId;
                this.subscribersService.notifySubscriber(
                    prevEvent,
                    await this.subscribersService.getById(
                        domainEvent.subscriberId,
                    ),
                );
                return this.domainEventsService.getByPrevEventId(newId);
            });
    }

    @Get('/count')
    count(
        @Query('from') from: string | null,
        @Query('to') to: string | null,
        @Query('type') type: string | null,
    ): Promise<number> {
        return this.domainEventsService.getCount(from, to, type);
    }

    @Get('/average-time')
    averageTime(): Promise<number> {
        return this.domainEventsService
            .getAverageExecutionTime()
            .then((result) => result[0].average ?? 0);
    }

    @Get('/times')
    times(
        @Query('from') from: string | null,
        @Query('to') to: string | null,
    ): Promise<number[]> {
        return this.domainEventsService
            .getExecutionTimes(from, to)
            .then((result) => result.map((time) => time.time));
    }

    @Get('/counts')
    counts(
        @Query('from') from: string | null,
        @Query('to') to: string | null,
        @Query('type') type: string | null,
    ): Promise<DayCount[]> {
        return this.domainEventsService.getCounts(from, to, type);
    }
}
