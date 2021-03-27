import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class MapperDto {
    @IsNotEmpty()
    @ApiProperty()
    readonly format: unknown;
}
