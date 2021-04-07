import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Subscriber } from 'src/subscribers/schemas/subscriber.schema';

export type PublisherDocument = Publisher & Document;

@Schema({ versionKey: false })
export class Publisher {
    @Prop()
    id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ type: Date, required: true, default: Date.now })
    createdAt: Date;

    subscribers: Subscriber[];
}

export const PublisherSchema = SchemaFactory.createForClass(Publisher);
