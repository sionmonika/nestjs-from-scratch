import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { HeroService } from './hero/hero.service';
import { HeroController } from './hero/hero.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';

@Module({
  controllers: [HeroController, ProductsController, AuthController],
  providers: [HeroService],
  imports: [AuthModule, UsersModule],
})
export class AppModule {}
