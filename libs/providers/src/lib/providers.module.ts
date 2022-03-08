import { Module } from '@nestjs/common';
import { SessionsProvider } from '../providers/sessions.provider';
import { UsersHasRightsProvider } from '../providers/users.has.rights.provider';
import { UsersProvider } from '../providers/users.provider';

import { QuickLinksProvider } from '../providers/quick.links.provider';
import { QuotesProvider } from '../providers/quotes.provider';
import { TagsProvider } from '../providers/tags.provider';
import { RightsProvider } from '../providers/rights.provider';
import { SocialMediaLinkProvider } from '../providers/social.media.link.provider';
import { AlexaProvider } from '../providers/alexa.audio.provider';
import { ChangeLogsProvider } from '../providers/change.logs.provider';
import { PresentersProvider } from '../providers/presenters.provider';
import { NewsProvider } from '../providers/news.provider';
import { NewsHasQuotesProvider } from '../providers/news.has.quotes.provider';
import { NewsHasTagsProvider } from '../providers/news.has.tags.provider';
import { SeoDetailsProvider } from '../providers/seo.details.provider';
import { NewsHasCategoriesProvider } from '../providers/news.has.categories.provider';
import { BreakingNewsProvider } from '../providers/breaking.news.provider';
import { JobsProvider } from '../providers/jobs.provider';
import { BranchesProvider } from '../providers/branches.provider';
import { DepartmentsProvider } from '../providers/departments.provider';
import { CategoriesProvider } from '../providers/categories.provider';

@Module({
  providers: [
    ...UsersProvider,
    ...SessionsProvider,
    ...UsersHasRightsProvider,
    ...TagsProvider,
    ...QuotesProvider,
    ...QuickLinksProvider,
    ...RightsProvider,
    ...SocialMediaLinkProvider,
    ...AlexaProvider,
    ...ChangeLogsProvider,
    ...PresentersProvider,
    ...NewsProvider,
    ...NewsHasQuotesProvider,
    ...NewsHasTagsProvider,
    ...SeoDetailsProvider,
    ...NewsHasCategoriesProvider,
    ...BreakingNewsProvider,
    ...JobsProvider,
    ...BranchesProvider,
    ...DepartmentsProvider,
    ...CategoriesProvider,
    ...BreakingNewsProvider

  ],
  exports: [
    ...UsersProvider,
    ...SessionsProvider,
    ...UsersHasRightsProvider,
    ...TagsProvider,
    ...QuotesProvider,
    ...QuickLinksProvider,
    ...RightsProvider,
    ...SocialMediaLinkProvider,
    ...AlexaProvider,
    ...ChangeLogsProvider,
    ...PresentersProvider,
    ...NewsProvider,
    ...NewsHasQuotesProvider,
    ...NewsHasTagsProvider,
    ...SeoDetailsProvider,
    ...NewsHasCategoriesProvider,
    ...BranchesProvider,
    ...CategoriesProvider,
    ...JobsProvider,
    ...DepartmentsProvider,
    ...BreakingNewsProvider
  
  ]
})

export class ProvidersModule { }
