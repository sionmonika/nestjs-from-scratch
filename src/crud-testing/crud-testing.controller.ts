import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { CrudTestingService } from './crud-testing.service';
import { CreateCrudTestingDto } from './dto/create-crud-testing.dto';
import { UpdateCrudTestingDto } from './dto/update-crud-testing.dto';
import { CrudTesting } from './entities/crud-testing.entity';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';

@Controller('crud-testing')
@CacheTTL(100000)

export class CrudTestingController {
  constructor(private readonly service: CrudTestingService) {}

  @Post()
  create(@Body() dto: CreateCrudTestingDto): Promise<CrudTesting> {
    return this.service.create(dto);
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  findAll(): Promise<CrudTesting[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @UseInterceptors(CacheInterceptor)
  findOne(@Param('id') id: string): Promise<CrudTesting> {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCrudTestingDto,
  ): Promise<CrudTesting> {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(+id);
  }
}
