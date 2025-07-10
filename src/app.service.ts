import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { MathHelperService } from './helpers/math-helper/math-helper.service';

@Injectable()
export class AppService {
  getCacheValue(arg0: string): Promise<string | undefined> {
    throw new Error('Method not implemented.');
  }
  constructor(
    private readonly mathHelperService: MathHelperService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {
    console.log('MathHelperService initialized');
  }

  getHello(): string {
    return 'Hello World!';
  }
  async Appservice() {
   await this.cacheManager.set('key1', 'hello');
   return await this.cacheManager.get('key1');
  }

  async getSquare(num: number): Promise<number> {
    const cacheKey = `square:${num}`;

    // Try to get from cache
    const cached = await this.cacheManager.get<number>(cacheKey);
    if (cached !== undefined) {
      console.log('✅ Returned from cache');
      return cached;
    }

    // Compute and cache the result
    const result = this.mathHelperService.square(num);
    await this.cacheManager.set(cacheKey, result, 10); // cache for 10 seconds

    console.log('🚀 Computed and cached');
    return result;
  }
}
