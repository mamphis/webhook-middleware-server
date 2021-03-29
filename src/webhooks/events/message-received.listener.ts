import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { DomainEventsService } from 'src/domain-events/domain-events.service';
import {
    DomainEvent,
    DomainEventType,
} from 'src/domain-events/schemas/domain-event.schema';
import { Subscriber } from 'src/subscribers/schemas/subscriber.schema';
import { SubscribersService } from 'src/subscribers/subscribers.service';

@Injectable()
export class MessageReceivedListener {
    constructor(
        private domainEventsService: DomainEventsService,
        private subscribersService: SubscribersService,
    ) {}
    @OnEvent(DomainEventType.Received)
    handleMessageReceivedEvent(event: DomainEvent): void {
        this.domainEventsService.create(event).then(() => {
            this.subscribersService
                .findAllByPublisherId(event.publisherId)
                .then((subscribers: Subscriber[]) => {
                    this.subscribersService.notifySubscribers(
                        event,
                        subscribers,
                    );
                });
        });
    }
}
