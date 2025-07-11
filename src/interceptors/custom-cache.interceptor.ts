import { Injectable, ExecutionContext, Logger } from '@nestjs/common';
import { CacheInterceptor, Cache } from '@nestjs/cache-manager';
import { HttpAdapterHost, Reflector } from '@nestjs/core';

@Injectable()
export class CustomCacheInterceptor extends CacheInterceptor {
  private readonly _logger = new Logger(this.constructor.name);
  constructor(
    protected readonly httpAdapterHost: HttpAdapterHost,
    cacheManager: Cache,
    reflector: Reflector,
  ) {
    super(cacheManager, reflector);
    this._logger.log('CustomCacheInterceptor initialized');
  }

  trackBy(context: ExecutionContext): string | undefined {
    if (!this.httpAdapterHost?.httpAdapter) {
      return undefined;
    }

    const httpAdapter = this.httpAdapterHost.httpAdapter;
    const request = context.switchToHttp().getRequest();

    if (context.getType() === 'http') {
      try {
        const url = httpAdapter.getRequestUrl(request);
        return `cache:${request.method}:${url}`;
      } catch (e) {
        return undefined;
      }
    }
    return undefined;
  }
}
