import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypesenseCrudModule } from './typesense-crud/typesense-crud.module';
import { TypesenseCrudController } from './typesense-crud/typesense-crud.controller';
import { TypesenseCrudService } from './typesense-crud/typesense-crud.service';

@Module({
  imports: [AppModule, TypesenseCrudModule],
  controllers: [AppController, TypesenseCrudController],
  providers: [AppService, TypesenseCrudService],
})
export class AppModule {}
