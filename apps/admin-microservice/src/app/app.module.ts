import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EntityModule} from '@cnbc-monorepo/entity'
@Module({
  imports: [EntityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
