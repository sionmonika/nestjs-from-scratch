import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCrudTestingCommand } from './commands/impl/create-crud-testing.command';
import { GetAllCrudTestingQuery } from './queries/impl/get-all-crud-testing.query';
import { GetOneCrudTestingQuery } from './queries/impl/get-one-crud-testing.query';
import { CreateCrudTestingDto } from '@/crud-testing/dto/create-crud-testing.dto';


@Controller('crud-testing')
@CacheTTL(100000)
 
export class CrudTestingController {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() dto: CreateCrudTestingDto) {
    return this.commandBus.execute(
      new CreateCrudTestingCommand(dto.name, dto.description),
    );
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  async findAll() {
    return this.queryBus.execute(new GetAllCrudTestingQuery());
  }

  @Get(':id')
  @UseInterceptors(CacheInterceptor)
  async findOne(@Param('id') id: string) {
    return this.queryBus.execute(new GetOneCrudTestingQuery(+id));
  }
}
