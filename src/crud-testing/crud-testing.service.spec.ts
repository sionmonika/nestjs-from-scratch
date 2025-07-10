import { Test, TestingModule } from '@nestjs/testing';
import { CrudTestingService } from './crud-testing.service';

describe('CrudTestingService', () => {
  let service: CrudTestingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudTestingService],
    }).compile();

    service = module.get<CrudTestingService>(CrudTestingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
