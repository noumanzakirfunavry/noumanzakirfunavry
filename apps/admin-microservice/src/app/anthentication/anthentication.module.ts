import { Module } from '@nestjs/common';
import { AnthenticationController } from './anthentication.controller';
import { AnthenticationService } from './anthentication.service';
import { ProvidersModule } from '@cnbc-monorepo/providers'
import { AuthModuleModule } from '@cnbc-monorepo/auth-module'
import { UtilityModule } from '@cnbc-monorepo/utility';
import { MailModule, MailService } from '@cnbc-monorepo/mail';
@Module({
  controllers: [AnthenticationController],
  providers: [
    AnthenticationService,
    MailService
  ],
  imports: [
    ProvidersModule,
    AuthModuleModule,
    UtilityModule,
    MailModule
  ]
})
export class AnthenticationModule { }
