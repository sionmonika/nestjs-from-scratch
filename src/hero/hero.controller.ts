import { Controller, Get } from '@nestjs/common';
import { HeroService } from './hero.service';

@Controller('heroes')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  async findAll() {
    // call your gRPC client service here to get heroes list
    // or just return sample data
    return [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
  }
}
