import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { DomainEventsService } from './domain-events.service';
import { PublisherTotalsDto } from './dto/publisher-totals.dto';
import { DomainEvent } from './schemas/domain-event.schema';

@Controller('domain-events')
@ApiTags('DomainEvents')
export class DomainEventsController {
    constructor(private readonly domainEventsService: DomainEventsService) {}

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
}
