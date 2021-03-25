import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SubscriberDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;
}
