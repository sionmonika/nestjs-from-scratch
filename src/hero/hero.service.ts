// src/hero/hero.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs';

export interface Hero {
  id: number;
  name: string;
}


interface HeroesService {
  FindOne(data: { id: number }): Observable<Hero>;
}


@Injectable()
export class HeroService implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, './hero.proto'),
      url: 'localhost:50051',
    },
  })
  private client: ClientGrpc;

  private grpcService: HeroesService;

  onModuleInit() {
    this.grpcService = this.client.getService<HeroesService>('HeroesService');
  }

  async findOne(id: number): Promise<Hero> {
  const hero = await this.grpcService.FindOne({ id }).toPromise();
  if (!hero) {
    throw new Error(`Hero with id ${id} not found`);
  }
  return hero;
}

}
