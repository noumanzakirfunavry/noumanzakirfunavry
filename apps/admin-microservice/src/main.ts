/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { HttpException, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

function traverseError(errors) {
  const errorStrArr = [];
  errors.forEach((err) => {
    if (err.children && err.children.length) {
      const arr = traverseError(err.children);
      arr.forEach((element) => {
        errorStrArr.push(element);
      });
    } else {
      const strArr2 = Object.keys(err.constraints).map(
        (constraint) => err.constraints[constraint],
      );
      strArr2.forEach((element) => {
        errorStrArr.push(element);
      });
    }
  });
  return errorStrArr;
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: false,
      exceptionFactory: (errors) => {
        const errorStrArr = traverseError(errors);
        return new HttpException(errorStrArr.join(', '), 400);
      },
    }),
  );
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3003;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
