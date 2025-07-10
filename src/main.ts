import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { CacheInterceptor, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const cacheManager = app.get<Cache>(CACHE_MANAGER);
  const reflector = app.get(Reflector);

  // app.useGlobalInterceptors(new CacheInterceptor(cacheManager, reflector));

  // Set global prefix for all routes
  app.setGlobalPrefix('api/v1');

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
