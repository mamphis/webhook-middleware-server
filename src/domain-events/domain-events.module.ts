import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainEventsService } from './domain-events.service';
import { DomainEvent, DomainEventSchema } from './schemas/domain-event.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: DomainEvent.name, schema: DomainEventSchema },
        ]),
    ],
    controllers: [],
    providers: [DomainEventsService],
})
export class DomainEventsModule {}
