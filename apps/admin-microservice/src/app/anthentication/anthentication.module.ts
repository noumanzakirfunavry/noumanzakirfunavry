import { Module } from '@nestjs/common';
import { AnthenticationController } from './anthentication.controller';
import { AnthenticationService } from './anthentication.service';
import { ProvidersModule } from '@cnbc-monorepo/providers'
import { AuthModuleModule } from '@cnbc-monorepo/auth-module'
import { UtilityModule } from '@cnbc-monorepo/utility';
@Module({
  controllers: [AnthenticationController],
  providers: [
    AnthenticationService,
  ],
  imports: [
    ProvidersModule,
    AuthModuleModule,
    UtilityModule
  ]
})
export class AnthenticationModule { }
