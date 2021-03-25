import { Module } from '@nestjs/common';
import { DomainEventsModule } from 'src/domain-events/domain-events.module';
import { PublishersModule } from 'src/publishers/publishers.module';
import { MessageReceivedListener } from './events/message-received.listener';
import { WebhooksController } from './webhooks.controller';

export const DEFAULT_OFFSET = '0';
export const DEFAULT_LIMIT = '10';

@Module({
    imports: [DomainEventsModule, PublishersModule],
    controllers: [WebhooksController],
    providers: [MessageReceivedListener],
})
export class WebhooksModule {}
