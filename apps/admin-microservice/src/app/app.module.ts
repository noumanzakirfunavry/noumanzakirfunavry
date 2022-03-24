import { Module } from '@nestjs/common';
import { EntityModule } from '@cnbc-monorepo/entity'
import { AnthenticationModule } from './anthentication/anthentication.module';
import { RightsModule } from './rights/rights.module';
import { SocialMediaLinksModule } from './social-media-links/social-media-links.module';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { AlexaAudioModule } from './alexa-audio/alexa-audio.module';
import { PresentersModule } from './presenters/presenters.module';
import { AdminModule } from './admin/admin.module';
import { JobsModule } from './jobs/jobs.module';
import { BranchesModule } from './branches/branches.module';
import { DepartmentModule } from './departments/departments.module';
import { CategoriesModule } from './categories/categories.module';
import { SystemConfigurationModule } from './system-configuration/system-configuration.module';
import { BreakingNewsModule } from './breakingNews/breakingNews.module';
import { LiveStreamLinksModule } from './live-stream-links/live-stream-links.module';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { AuthModuleModule } from '@cnbc-monorepo/auth-module';
import { AlertsModule } from './alerts/alerts.module';
import { MessagesModule } from './messages/messages.module';
import { ExclusiveVideosModule } from './exclusive-videos/exclusive-videos.module';
import { EpisodesModule } from './episodes/episodes.module';
import { AttachmentsModule } from './attachments/attachments.module';
import { SubscribersModule } from './subscribers/subscribers.module';

@Module({
  imports: [
    EntityModule,
    AnthenticationModule,
    RightsModule,
    SocialMediaLinksModule,
    UtilityModule,
    AlexaAudioModule,
    PresentersModule,
    AdminModule,
    JobsModule,
    BranchesModule,
    DepartmentModule,
    CategoriesModule,
    SystemConfigurationModule,
    BreakingNewsModule,
    LiveStreamLinksModule,
    ProvidersModule,
    AuthModuleModule,
    AlertsModule,
    MessagesModule,
    ExclusiveVideosModule,
    EpisodesModule,
    AttachmentsModule,
    SubscribersModule
  ]
})
export class AppModule { }
