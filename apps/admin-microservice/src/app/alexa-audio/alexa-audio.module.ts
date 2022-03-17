import { AuthModuleModule } from '@cnbc-monorepo/auth-module';
import { ExceptionHandlingModule } from '@cnbc-monorepo/exception-handling';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { AlexaAudioController } from './alexa-audio.controller';
import { AlexaAudioService } from './alexa-audio.service';

@Module({
  controllers: [AlexaAudioController],
  providers: [AlexaAudioService],
  imports : [
    ProvidersModule,
    AuthModuleModule,
    UtilityModule,
    ExceptionHandlingModule,
  ]
})
export class AlexaAudioModule {}
