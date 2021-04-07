import {
    Prop,
    Schema as NestMongooseSchema,
    SchemaFactory,
} from '@nestjs/mongoose';
import { Document, Schema } from 'mongoose';

export type MapperDocument = Mapper & Document;

@NestMongooseSchema({ versionKey: false })
export class Mapper {
    @Prop()
    id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, type: Schema.Types.Mixed })
    format: unknown;

    @Prop({ type: Date, required: true, default: Date.now })
    createdAt: Date;
}

export const MapperSchema = SchemaFactory.createForClass(Mapper);
