import { Test, TestingModule } from '@nestjs/testing';
import { MathHelperService } from './math-helper.service';

describe('MathHelperService', () => {
  let service: MathHelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathHelperService],
    }).compile();

    service = module.get<MathHelperService>(MathHelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
