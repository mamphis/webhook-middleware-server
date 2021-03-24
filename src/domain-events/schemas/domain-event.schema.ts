import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DomainEventDocument = DomainEvent & Document;

enum DomainEventStatus {
    Success = 'success',
    Error = 'error',
}

enum DomainEventType {
    Received = 'received_message',
    Sent = 'sent_message',
}

@Schema({ versionKey: false })
export class DomainEvent {
    @Prop({ type: 'uuid' })
    id: string;

    @Prop({ required: true, type: 'string', enum: DomainEventType })
    type: string;

    @Prop({ required: true, enum: DomainEventStatus })
    status: string;

    @Prop({ type: Date, required: true, default: Date.now })
    createdAt: Date;
}

export const DomainEventSchema = SchemaFactory.createForClass(DomainEvent);
