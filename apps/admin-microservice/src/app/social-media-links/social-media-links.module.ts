import { AuthModuleModule } from '@cnbc-monorepo/auth-module';
import { ExceptionHandlingModule } from '@cnbc-monorepo/exception-handling';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { SocialMediaLinksController } from './social-media-links.controller';
import { SocialMediaLinksService } from './social-media-links.service';
@Module({
  controllers: [SocialMediaLinksController],
  providers: [SocialMediaLinksService],
  imports  : [
    ProvidersModule,
    AuthModuleModule,
    UtilityModule,
    ExceptionHandlingModule,
  ]
})
export class SocialMediaLinksModule {}
