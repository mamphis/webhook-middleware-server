import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { DomainEventsService } from './domain-events.service';
import { PublisherTotalsDto } from './dto/publisher-totals.dto';

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
}
