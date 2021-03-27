import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MappersController } from './mappers.controller';
import { MappersService } from './mappers.service';
import { Mapper, MapperSchema } from './schemas/mapper.schema';

export const DEFAULT_OFFSET = '0';
export const DEFAULT_LIMIT = '10';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Mapper.name, schema: MapperSchema },
        ]),
    ],
    controllers: [MappersController],
    providers: [MappersService],
    exports: [MappersService],
})
export class MappersModule {}
