/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import 'dotenv/config'
import { HttpException, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NewsMicroserviceModule } from './news-microservice.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


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
  const app = await NestFactory.create(NewsMicroserviceModule);
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: false,
      exceptionFactory: (errors) => {
        const errorStrArr = traverseError(errors);
        return new HttpException(errorStrArr.join(', '), 400);
      },
    }),
  );
  const config = new DocumentBuilder()
  .setTitle('CNBC - News Microservice')
  .setDescription('The News Microservice API description')
  .setVersion('1.0')
  .addTag('CNBC, NEWS')
  .addBearerAuth(
    { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
    'JWT-auth',
  )
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('News/api', app, document);
  const port = process.env.PORT || 3001;
  app.enableCors();
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port);
  });

}

bootstrap();
