import {
    Prop,
    Schema as NestMongooseSchema,
    SchemaFactory,
} from '@nestjs/mongoose';
import { Document, Schema } from 'mongoose';

export type DomainEventDocument = DomainEvent & Document;

export enum DomainEventStatus {
    Success = 'success',
    Error = 'error',
}

export enum DomainEventType {
    Received = 'received_message',
    Sent = 'sent_message',
}

@NestMongooseSchema({ versionKey: false })
export class DomainEvent {
    constructor(
        type: string,
        status: string,
        payload: unknown,
        publisherId: string | null = null,
        subscriberId: string | null = null,
    ) {
        this.type = type;
        this.status = status;
        this.payload = payload;
        this.publisherId = publisherId;
        this.subscriberId = subscriberId;
    }
    @Prop()
    id: string;

    @Prop({ required: true, enum: DomainEventType })
    type: string;

    @Prop({ required: true, enum: DomainEventStatus })
    status: string;

    @Prop({ required: true, type: Schema.Types.Mixed })
    payload: unknown;

    @Prop({ required: false })
    publisherId: string | null;

    @Prop({ required: false })
    subscriberId: string | null;

    @Prop({ type: Date, required: true, default: Date.now })
    createdAt: Date;
}

export const DomainEventSchema = SchemaFactory.createForClass(DomainEvent);
