import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('webhooks')
@ApiTags('Webhooks')
export class WebhooksController {
    /* eslint-disable @typescript-eslint/explicit-module-boundary-types*/
    /* eslint-disable @typescript-eslint/no-explicit-any*/
    @Post(':publisherId')
    @HttpCode(HttpStatus.OK)
    async create(@Body() webhookPayload: any): Promise<void> {
        console.log(webhookPayload);
    }
}
