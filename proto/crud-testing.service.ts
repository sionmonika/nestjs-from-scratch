// src/hero/hero.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroService {
  private readonly heroes = [{ id: 1, name: 'Superman' }, { id: 2, name: 'Batman' }];

  findOne({ id }: { id: number }) {
    return this.heroes.find(hero => hero.id === id);
  }
}
