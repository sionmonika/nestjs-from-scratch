import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { CacheInterceptor, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  // HTTP app (used for REST, cache, etc.)
  const app = await NestFactory.create(AppModule);

  const cacheManager = app.get<Cache>(CACHE_MANAGER);
  const reflector = app.get(Reflector);
  // app.useGlobalInterceptors(new CacheInterceptor(cacheManager, reflector));

  app.setGlobalPrefix('api/v1');

  // Attach gRPC microservice
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: 'hero',
  //     protoPath: join(__dirname, 'hero/hero.proto'),
  //   },
  // });

  await app.startAllMicroservices();
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
