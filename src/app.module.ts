import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainEventsModule } from './domain-events/domain-events.module';
import { MappersModule } from './mappers/mappers.module';
import { PublishersModule } from './publishers/publishers.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConsoleModule } from 'nestjs-console';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot('mongodb://root:root@mongo:27017/admin'),
        PublishersModule,
        WebhooksModule,
        DomainEventsModule,
        MappersModule,
        SubscribersModule,
        EventEmitterModule.forRoot(),
        AuthModule,
        UsersModule,
        ConsoleModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
