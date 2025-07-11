import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCrudTestingCommand } from '../impl/create-crud-testing.command';
import { CrudTestingService } from '@/crud-testing/crud-testing.service';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudTesting } from '@/crud-testing/entities/crud-testing.entity';
import { Repository } from 'typeorm/repository/Repository';
 

@CommandHandler(CreateCrudTestingCommand)
export class CreateCrudTestingHandler implements ICommandHandler<CreateCrudTestingCommand> {
   
  constructor(
    @InjectRepository(CrudTesting)
    private readonly crudTestingRepository: Repository<CrudTesting>,
  ) {}

  async execute(command: CreateCrudTestingCommand) {
    const { name } = command;
    return this.crudTestingRepository.create({
        //  descriptions:description,
         name: name,
    });
  }
}
