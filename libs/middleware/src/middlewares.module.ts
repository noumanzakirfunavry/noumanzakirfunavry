import { AppLoggerMiddleware } from './app-logger.middleware';
import { RequestCheckerMiddleware } from './request-checker.middleware';
import { Module } from '@nestjs/common';

@Module({
  providers: [AppLoggerMiddleware, RequestCheckerMiddleware],
  exports: [AppLoggerMiddleware, RequestCheckerMiddleware],
})
export class MiddlewaresModule {}
