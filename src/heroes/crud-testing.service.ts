import { Injectable } from '@nestjs/common';
import { CrudTestingRepository } from './crud-testing.repository';

@Injectable()
export class CrudTestingService {
  constructor(private readonly repo: CrudTestingRepository) {}

  create(data: any) {
    return this.repo.create(data);
  }

  // other methods...
}
    