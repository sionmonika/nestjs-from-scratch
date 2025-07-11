// src/hero/hero.controller.ts
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HeroService } from './crud-testing.service';

@Controller()
export class CrudTestingController {
  constructor(private readonly heroService: HeroService) {}

  @GrpcMethod('HeroService', 'FindOne')
  findOne(data: { id: number }) {
    return this.heroService.findOne(data);
  }
}
