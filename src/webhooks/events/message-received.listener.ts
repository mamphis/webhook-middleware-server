import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { DomainEventsService } from 'src/domain-events/domain-events.service';
import {
    DomainEvent,
    DomainEventDocument,
    DomainEventType,
} from 'src/domain-events/schemas/domain-event.schema';
import { SubscriberDocument } from 'src/subscribers/schemas/subscriber.schema';
import { SubscribersService } from 'src/subscribers/subscribers.service';

@Injectable()
export class MessageReceivedListener {
    constructor(
        private domainEventsService: DomainEventsService,
        private subscribersService: SubscribersService,
    ) {}
    @OnEvent(DomainEventType.Received)
    handleMessageReceivedEvent(event: DomainEvent): void {
        this.domainEventsService.create(event).then((newEvent: DomainEventDocument) => {
            this.subscribersService
                .findAllByPublisherId(event.publisherId)
                .then((subscribers: SubscriberDocument[]) => {
                    this.subscribersService.notifySubscribers(
                        newEvent,
                        subscribers,
                    );
                });
        });
    }
}
