import { AuthModuleModule } from '@cnbc-monorepo/auth-module';
import { EntityModule } from '@cnbc-monorepo/entity';
import { ProvidersModule } from '@cnbc-monorepo/providers';
import { UtilityModule } from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { AlertsModule } from './alerts/alerts.module';
import { AlexaAudioModule } from './alexa-audio/alexa-audio.module';
import { AnthenticationModule } from './anthentication/anthentication.module';
import { AttachmentsModule } from './attachments/attachments.module';
import { BranchesModule } from './branches/branches.module';
import { BreakingNewsModule } from './breakingNews/breakingNews.module';
import { CategoriesModule } from './categories/categories.module';
import { CountriesModule } from './countries/countries.module';
import { DepartmentModule } from './departments/departments.module';
import { EpisodesModule } from './episodes/episodes.module';
import { ExclusiveVideosModule } from './exclusive-videos/exclusive-videos.module';
import { JobsModule } from './jobs/jobs.module';
import { LiveStreamLinksModule } from './live-stream-links/live-stream-links.module';
import { MessagesModule } from './messages/messages.module';
import { PresentersModule } from './presenters/presenters.module';
import { RightsModule } from './rights/rights.module';
import { SocialMediaLinksModule } from './social-media-links/social-media-links.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { JobApplicantModule } from './job-applicant/job-applicant.module';
import { SystemConfigurationModule } from './system-configuration/system-configuration.module';
import { MenusModule } from './menus/menus.module';

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
    SubscribersModule,
    CountriesModule,
    JobApplicantModule,
    MenusModule
  ]
})
export class AppModule { }
