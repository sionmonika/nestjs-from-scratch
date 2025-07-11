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
import { CommandBus, QueryBus} from '@nestjs/cqrs';
import { CreateCrudTestingCommand } from '@/heroes/commands/impl/create-crud-testing.command';
import { GetOneCrudTestingQuery } from '@/heroes/queries/impl/get-one-crud-testing.query';
import { GetAllCrudTestingQuery } from '@/heroes/queries/impl/get-all-crud-testing.query';


@Controller('crud-testing')
@CacheTTL(100000)


export class CrudTestingController {
  constructor(private commandBus: CommandBus)  {}

  @Post()
  create(@Body() dto: CreateCrudTestingDto): Promise<CrudTesting> {
    return this.commandBus.execute(new CreateCrudTestingCommand(dto.name, dto.description));
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  findAll(): Promise<CrudTesting[]> {
    return this.commandBus.execute(new GetAllCrudTestingQuery());
  }

  @Get(':id')
  @UseInterceptors(CacheInterceptor)
  findOne(@Param('id') id: string): Promise<CrudTesting> {
    return this.commandBus.execute(new GetOneCrudTestingQuery(+id));
  }

//   @Put(':id')
//   update(
//     @Param('id') id: string,
//     @Body() dto: UpdateCrudTestingDto,
//   ): Promise<CrudTesting> {
//     return this.commandBus.execute(new UpdateCrudTestingCommand(+id, dto));
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string): Promise<void> {
//     return this.commandBus.execute(new CrudTestingCommand(+id));
//   }
}
