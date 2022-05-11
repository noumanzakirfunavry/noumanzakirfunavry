import { ProvidersModule } from '@cnbc-monorepo/providers';
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AdminLogInterceptor } from '../interceptors/admin.log.interceptor';

@Module({
	imports: [ProvidersModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AdminLogInterceptor,
    },
  ],
})
export class InterceptorsModule {}