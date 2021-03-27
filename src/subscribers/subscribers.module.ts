import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscribersController } from './subscribers.controller';
import { SubscribersService } from './subscribers.service';
import { Subscriber, SubscriberSchema } from './schemas/subscriber.schema';

export const DEFAULT_OFFSET = '0';
export const DEFAULT_LIMIT = '10';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Subscriber.name, schema: SubscriberSchema },
        ]),
    ],
    controllers: [SubscribersController],
    providers: [SubscribersService],
    exports: [SubscribersService],
})
export class SubscribersModule {}