import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CrudTestingService } from './crud-testing.service';
import { CrudTestingRepository } from './crud-testing.repository';
import { CrudTestingController } from './crud-tesing.controller'; // spelling: 'tesing' not 'testing'

// Commands & Queries
import { CreateCrudTestingHandler } from './commands/handlers/create-crude-testing.handler';
import { GetAllCrudTestingHandler } from './queries/handlers/get-all-crud-testing.handler';
import { GetOneCrudTestingHandler } from './queries/handlers/get-one-crud-testing.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudTesting } from '@/crud-testing/entities/crud-testing.entity';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([CrudTesting])],
  controllers: [CrudTestingController],
  providers: [
    CrudTestingService,
    CrudTestingRepository, // ✅ THIS IS REQUIREDs
    CreateCrudTestingHandler,
    GetAllCrudTestingHandler,
    GetOneCrudTestingHandler,
  ],
})
export class CrudTestingModule {}
