import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudTestingDto } from './create-crud-testing.dto';

export class UpdateCrudTestingDto extends PartialType(CreateCrudTestingDto) {}
