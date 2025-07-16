// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // gRPC microservice (heroes)
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, './hero/hero.proto'),
      // protoPath: join(__dirname, 'src/products/products.proto'),
      url: 'localhost:50051',
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000); // <-- this must exist
  console.log('🚀 HTTP server running at http://localhost:3000');
}
bootstrap();
