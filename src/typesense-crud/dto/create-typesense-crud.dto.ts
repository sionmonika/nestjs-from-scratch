import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateTypesenseCrudDto {
  @ApiProperty({
    name: 'name',
    description: 'The name of the Typesense instance',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  id: number;
}
