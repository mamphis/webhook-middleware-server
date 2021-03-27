import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MapperDocument = Mapper & Document;

@Schema({ versionKey: false })
export class Mapper {
    @Prop()
    id: string;

    @Prop({ required: true })
    format: string;

    @Prop({ type: Date, required: true, default: Date.now })
    createdAt: Date;
}

export const MapperSchema = SchemaFactory.createForClass(Mapper);
