import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetOneCrudTestingQuery } from '../impl/get-one-crud-testing.query';
import { CrudTestingService } from '@/crud-testing/crud-testing.service';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { CrudTesting } from '@/crud-testing/entities/crud-testing.entity';
import { Repository } from 'typeorm/repository/Repository';
 

@QueryHandler(GetOneCrudTestingQuery)
export class GetOneCrudTestingHandler implements IQueryHandler<GetOneCrudTestingQuery> {
  constructor(
    @InjectRepository(CrudTesting)
        private readonly crudTestingRepository: Repository<CrudTesting>,
  ) {}

  async execute(query: GetOneCrudTestingQuery) {
    return this.crudTestingRepository.findOne({
      where: { id: query.id },
      relations: ['descriptions'],
    });
  }
}
