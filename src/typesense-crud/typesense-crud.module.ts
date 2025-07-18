import { Module } from '@nestjs/common';
import { TypesenseCrudService } from './typesense-crud.service';
import { TypesenseCrudController } from './typesense-crud.controller';

@Module({
    imports: [],
    controllers: [TypesenseCrudController],
    providers: [TypesenseCrudService],
})
export class TypesenseCrudModule {}
