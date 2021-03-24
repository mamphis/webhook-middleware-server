import { Module } from '@nestjs/common';
import { WebhooksController } from './webhooks.controller';

export const DEFAULT_OFFSET = '0';
export const DEFAULT_LIMIT = '10';

@Module({
    imports: [],
    controllers: [WebhooksController],
    providers: [],
})
export class WebhooksModule {}
