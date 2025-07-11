import {
  IsString,
  ValidateNested,
  IsOptional,
  IsArray,
  ArrayMinSize,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

class CreateDescriptionDto {
  @IsString()
  @IsNotEmpty()
  readonly content: string;

  constructor(content: string) {
    this.content = content;
  }
}

class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  readonly bio: string;

  constructor(bio: string) {
    this.bio = bio;
  }
}

class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class CreateCrudTestingDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateDescriptionDto)
  readonly descriptions?: CreateDescriptionDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateProfileDto)
  readonly profile?: CreateProfileDto;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateRoleDto)
  readonly roles?: CreateRoleDto[];
    description!: string;

  constructor(
    name: string,
    descriptions?: CreateDescriptionDto[],
    profile?: CreateProfileDto,
    roles?: CreateRoleDto[],
  ) {
    this.name = name;
    this.descriptions = descriptions;
    this.profile = profile;
    this.roles = roles;
  }
}