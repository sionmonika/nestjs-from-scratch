import { PartialType } from '@nestjs/mapped-types';
import { CreateTypesenseCrudDto } from './create-typesense-crud.dto';       

export class UpdateTypesenseCrudDto extends PartialType(CreateTypesenseCrudDto) {
  // Additional properties for update can be defined here if needed
  // For example, if you want to allow updating the ID or other fields
  id?: number; // Optional field for updating ID
  name?: string; // Optional field for updating name
}