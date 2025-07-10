import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudTesting } from './entities/crud-testing.entity';
import { Description } from './entities/description.entity';
import { CrudTestingService } from './crud-testing.service';
import { CrudTestingController } from './crud-testing.controller';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { Role } from './entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CrudTesting, Description,User,Profile, Role])],
  controllers: [CrudTestingController],
  providers: [CrudTestingService],
})
export class CrudTestingModule {}
