import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    NotFoundException,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import { MapperDto } from './dto/mapper.dto';
import { MappersService } from './mappers.service';
import { Mapper } from './schemas/mapper.schema';
import { Types } from 'mongoose';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from './mappers.module';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('mappers')
@ApiTags('Mappers')
export class MappersController {
    constructor(private readonly mappersService: MappersService) {}

    @Get()
    @ApiQuery({ name: 'offset', required: false })
    @ApiQuery({ name: 'limit', required: false })
    findAll(
        @Query('offset') offset: string = DEFAULT_OFFSET,
        @Query('limit') limit: string = DEFAULT_LIMIT,
    ): Promise<Mapper[]> {
        return this.mappersService.findAll(offset, limit);
    }

    @Post()
    async create(@Body() mapperDto: MapperDto): Promise<Mapper> {
        return this.mappersService.create(mapperDto);
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Mapper> {
        if (!Types.ObjectId.isValid(id)) {
            throw new NotFoundException();
        }
        return this.mappersService.getById(id);
    }

    @Put(':id')
    update(
        @Param('id') mapperId: string,
        @Body() mapperDto: MapperDto,
    ): Promise<Mapper> {
        return this.mappersService.update(mapperId, mapperDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: string): void {
        if (!Types.ObjectId.isValid(id)) {
            return;
        }
        this.mappersService.delete(id);
        return;
    }
}
