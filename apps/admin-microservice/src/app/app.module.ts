import { Module } from '@nestjs/common';
import {EntityModule} from '@cnbc-monorepo/entity'
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
import { BreakingNewsModule } from './breakingNews/breakingNews.module';
@Module({
  imports: [EntityModule, 
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
    BreakingNewsModule,
  ],
})
export class AppModule {}
