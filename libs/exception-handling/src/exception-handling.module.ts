import { Module } from '@nestjs/common';
import { AllExceptionsFilter } from './custom.exception.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
  exports: [],
})
export class ExceptionHandlingModule {}
