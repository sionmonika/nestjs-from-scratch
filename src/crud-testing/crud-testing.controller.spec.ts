import { Test, TestingModule } from '@nestjs/testing';
import { CrudTestingController } from './crud-testing.controller';
import { CrudTestingService } from './crud-testing.service';

describe('CrudTestingController', () => {
  let controller: CrudTestingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudTestingController],
      providers: [CrudTestingService],
    }).compile();

    controller = module.get<CrudTestingController>(CrudTestingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
});
