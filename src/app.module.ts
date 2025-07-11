import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { CrudTestingModule } from './crud-testing/crud-testing.module';
import { CacheModule, CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';

import { User } from './crud-testing/entities/user.entity';
import { Description } from './crud-testing/entities/description.entity';
import { Profile } from './crud-testing/entities/profile.entity';
import { Role } from './crud-testing/entities/role.entity';
import { CrudTesting } from './crud-testing/entities/crud-testing.entity';

import { APP_INTERCEPTOR, Reflector } from '@nestjs/core';
import { HttpAdapterHost } from '@nestjs/core';
import { CustomCacheInterceptor } from './interceptors/custom-cache.interceptor';
import { createKeyv } from '@keyv/redis';
import { Keyv } from 'keyv';
import { CacheableMemory } from 'cacheable';
import { CqrsModule } from '@nestjs/cqrs';
 import { CrudTestingModule} from './heroes/crud-testing.module';


@Module({
  imports: [
     CqrsModule.forRoot(),
     CacheModule.registerAsync({
      useFactory: async () => {
        return {
          stores: [
            new Keyv({
              store: new CacheableMemory({ ttl: 60000, lruSize: 5000 }),
            }),
            createKeyv('redis://localhost:6379'),
          ],
        };
      },
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [
        CrudTesting,
        Description,
        User,
        Profile,
        Role,
      ],
      synchronize: true,
    }),

    CrudTestingModule,

    CrudTesting,
  ],
  providers: [
    // {
    //   // provide: APP_INTERCEPTOR,
    //   // useClass: CacheInterceptor,
    // },
  ],
})
export class AppModule {}
