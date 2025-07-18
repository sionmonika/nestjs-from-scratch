import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { TypesenseCrudService } from './typesense-crud.service';
import { CreateTypesenseCrudDto } from './dto/create-typesense-crud.dto';
import { UpdateTypesenseCrudDto } from './dto/update-typesense-crud.dto';

@Controller('typesense-crud')
export class TypesenseCrudController {
  constructor(private readonly typesenseCrudService: TypesenseCrudService) {}

  @Post()
  create(@Body() body: CreateTypesenseCrudDto) {
    return this.typesenseCrudService.create(body.name, body.id);
  }

  @Get()
  findAll() {
    return this.typesenseCrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typesenseCrudService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateTypesenseCrudDto
  ) {
    return this.typesenseCrudService.update(Number(id), body.name ?? '');
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typesenseCrudService.remove(Number(id));
  }
}
