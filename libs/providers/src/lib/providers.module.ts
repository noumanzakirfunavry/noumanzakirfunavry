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
import { NewsVisitorsProvider } from '../providers/news.visitors.provider';
import { NewsHasQuotesProvider } from '../providers/news.has.quotes.provider';
import { NewsHasTagsProvider } from '../providers/news.has.tags.provider';
import { SeoDetailsProvider } from '../providers/seo.details.provider';
import { NewsHasCategoriesProvider } from '../providers/news.has.categories.provider';
import { BreakingNewsProvider } from '../providers/breaking.news.provider';
import { JobsProvider } from '../providers/jobs.provider';
import { BranchesProvider } from '../providers/branches.provider';
import { DepartmentsProvider } from '../providers/departments.provider';
import { CategoriesProvider } from '../providers/categories.provider';
import { SiteConfigurationProvider } from '../providers/site.configuration.provider';
import { LiveStreamLinksProvider } from '../providers/live.stream.links.provider';
import { AlertsProvider } from '../providers/alerts.provider';
import { MessageProvider } from '../providers/message.provider';
import { ExclusiveVideosProvider } from '../providers/exclusive.videos.provider';
import { EpisodesProvider } from '../providers/episodes.provider';
import { EpisodeHasTagsProvider } from '../providers/episodes.has.tags.provider';
import { EpisodeHasQuotesProvider } from '../providers/episodes.has.quotes.provider';
import { AttachmentsProvider } from '../providers/attachments.provider';
import { EmailSubscribersProvider } from '../providers/email.subscribers.provider';
import { JobApplicantsProvider } from '../providers/job.applicants.provider';
import { FeaturedNewsProvider } from '../providers/featured.news.provider';
import { EditorsChoiceNewsProvider } from '../providers/editors.choice.news.provider';
import { TrendingNewsProvider } from '../providers/trending.news.provider';
import { MenusProvider } from '../providers/menus.provider';
import { MarketsProvider } from '../providers/markets.provider';
import { PagesProvider } from '../providers/pages.provider';
import { DailymotionUploadRequestsProvider } from '../providers/dailyMotion.upload.requests.provider';
import { ProgramsProvider } from '../providers/programs.provider';
import { CommentsProvider } from '../providers/comments.provider';

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
		...NewsVisitorsProvider,
    ...CategoriesProvider,
    ...SiteConfigurationProvider,
    ...BreakingNewsProvider,
    ...LiveStreamLinksProvider,
    ...AlertsProvider,
    ...MessageProvider,
    ...ExclusiveVideosProvider,
    ...EpisodesProvider,
    ...EpisodeHasTagsProvider,
    ...EpisodeHasQuotesProvider,
    ...AttachmentsProvider,
    ...EmailSubscribersProvider,
    ...JobApplicantsProvider,
    ...FeaturedNewsProvider,
    ...EditorsChoiceNewsProvider,
    ...TrendingNewsProvider,
    ...ExclusiveVideosProvider,
		...MenusProvider,
		...MarketsProvider,
		...PagesProvider,
		...DailymotionUploadRequestsProvider,
		...ProgramsProvider,
    ...CommentsProvider,
		...ChangeLogsProvider
  ],
  exports: [
    ...UsersProvider,
    ...SessionsProvider,
    ...UsersHasRightsProvider,
    ...TagsProvider,
    ...QuotesProvider,
    ...QuickLinksProvider,
    ...RightsProvider,
		...NewsVisitorsProvider,
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
    ...BreakingNewsProvider,
    ...SiteConfigurationProvider,
    ...LiveStreamLinksProvider,
    ...AlertsProvider,
    ...MessageProvider,
    ...ExclusiveVideosProvider,
    ...EpisodesProvider,
    ...EpisodeHasTagsProvider,
    ...EpisodeHasQuotesProvider,
    ...AttachmentsProvider,
    ...EmailSubscribersProvider,
    ...JobApplicantsProvider,
    ...FeaturedNewsProvider,
    ...EditorsChoiceNewsProvider,
    ...TrendingNewsProvider,
    ...ExclusiveVideosProvider,
		...MenusProvider,
		...MarketsProvider,
		...PagesProvider,
		...DailymotionUploadRequestsProvider,
		...ProgramsProvider,
    ...CommentsProvider,
		...ChangeLogsProvider
  ],
})
export class ProvidersModule {}
