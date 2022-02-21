import { Module } from '@nestjs/common';
import { AnthenticationController } from './anthentication.controller';
import { AnthenticationService } from './anthentication.service';
import {ProvidersModule} from '@cnbc-monorepo/providers'
import {AuthModuleModule} from '@cnbc-monorepo/auth-module'
@Module({
  controllers: [AnthenticationController],
  providers: [
    AnthenticationService,
  ],
  imports : [
    ProvidersModule,
    AuthModuleModule
  ]
})
export class AnthenticationModule {}
