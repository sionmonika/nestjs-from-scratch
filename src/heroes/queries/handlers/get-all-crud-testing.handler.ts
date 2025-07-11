import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllCrudTestingQuery } from '../impl/get-all-crud-testing.query';
import { CrudTestingService } from '@/crud-testing/crud-testing.service';
import { Repository } from 'typeorm';
import { CrudTesting } from '@/crud-testing/entities/crud-testing.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
 

@QueryHandler(GetAllCrudTestingQuery)
export class GetAllCrudTestingHandler implements IQueryHandler<GetAllCrudTestingQuery> {
  constructor(
    @InjectRepository(CrudTesting)
        private readonly crudTestingRepository: Repository<CrudTesting>,
  ) {}

  async execute() {
    return this.crudTestingRepository.find({
      relations: ['descriptions'],
    }); 
  }
}
