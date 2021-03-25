import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { DomainEventsService } from 'src/domain-events/domain-events.service';
import {
    DomainEvent,
    DomainEventType,
} from 'src/domain-events/schemas/domain-event.schema';

@Injectable()
export class MessageReceivedListener {
    constructor(private domainEventsService: DomainEventsService) {}
    @OnEvent(DomainEventType.Received)
    handleMessageReceivedEvent(event: DomainEvent): void {
        this.domainEventsService.create(event).then(() => {
            console.log(event);
        });
    }
}
