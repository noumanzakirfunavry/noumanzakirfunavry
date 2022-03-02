import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EntityModule} from '@cnbc-monorepo/entity'
import { AnthenticationModule } from './anthentication/anthentication.module';
import { RightsModule } from './rights/rights.module';
import { SocialMediaLinksModule } from './social-media-links/social-media-links.module';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { AlexaAudioModule } from './alexa-audio/alexa-audio.module';
import { PresentersModule } from './presenters/presenters.module';
import { AdminModule } from './admin/admin.module';
@Module({
  imports: [EntityModule, AnthenticationModule, RightsModule, SocialMediaLinksModule,UtilityModule, AlexaAudioModule, PresentersModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
