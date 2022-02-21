import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EntityModule} from '@cnbc-monorepo/entity'
import { AnthenticationModule } from './anthentication/anthentication.module';
@Module({
  imports: [EntityModule, AnthenticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
