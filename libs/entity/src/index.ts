import { Alerts } from './entities/alerts.entity';
import { AlexaAudio } from './entities/alexa.audio.entity';
import { Attachments } from './entities/attachments.entity';
import { Banner } from './entities/banner.entity';
import { BannerVariations } from './entities/banner.variations.entity';
import { Branches } from './entities/branches.entity';
import { BreakingNews } from './entities/breaking.news.entity';
import { Categories } from './entities/categories.entity';
import { ChangeLogs } from './entities/change.logs.entity';
import { ContentAnalytics } from './entities/content.analytics.entity';
import { Departments } from './entities/departments.entity';
import { EditorsChoiceNews } from './entities/editors.choice.news.entity';
import { EmailSubscribers } from './entities/email.subscribers.entity';
import { EpisodeVisitors } from './entities/episode.visitors.entity';
import { Episodes } from './entities/episodes.entity';
import { ExclusiveVideos } from './entities/exclusive.videos.entity';
import { FeaturedNews } from './entities/featured.news.entity';
import { InfographicsAttachments } from './entities/infographics.attachments.entity';
import { Infographics } from './entities/infographics.entity';
import { InfographicsVisitors } from './entities/infographics.visitors.entity';
import { JobApplicants } from './entities/job.applicants.entity';
import { JobApplicantsHasLanguages } from './entities/job.applicants.has.languages.entity';
import { Jobs } from './entities/jobs.entity';
import { JobsHasDepartments } from './entities/jobs.has.departments.entity';
import { Languages } from './entities/languages.entity';
import { LiveStreamLinks } from './entities/live.stream.links.entity';
import { Markets } from './entities/markets.entity';
import { Menus } from './entities/menus.entity';
import { Message } from './entities/message.entity';
import { MessageHasAttachments } from './entities/message.has.attachments.entity';
import { MessageType } from './entities/message.type.entity';
import { Nationality } from './entities/nationality.entity';
import { NewsAlert } from './entities/news.alert.entity';
import { News } from './entities/news.entity';
import { NewsHasCategories } from './entities/news.has.categories.entity';
import { NewsHasQuotes } from './entities/news.has.quotes.entity';
import { NewsHasTags } from './entities/news.has.tags.entity';
import { NewsVisitors } from './entities/news.visitors.entity';
import { NotificationSubscriber } from './entities/notification.subscribers.entity';
import { Pages } from './entities/pages.entity';
import { PagesHasQuotes } from './entities/pages.has.quotes.entity';
import { Presenters } from './entities/presenters.entity';
import { Programs } from './entities/programs.entity';
import { ProgramsHasPresenters } from './entities/programs.has.presenters.entity';
import { ProgramsSchedule } from './entities/programs.schedule.entity';
import { PushNotification } from './entities/push.notification.entity';
import { Qualification } from './entities/qualification.entity';
import { QuickLinks } from './entities/quick.links.entity';
import { Quotes } from './entities/quotes.entity';
import { Rights } from './entities/rights.entity';
import { Roles } from './entities/roles.entity';
import { SeoDetails } from './entities/seo.details.entity';
import { Sessions } from './entities/sessions.entity';
import { SidebarElements } from './entities/sidebar.elements.entity';
import { Sidebars } from './entities/sidebars.entity';
import { SiteConfiguration } from './entities/site.configuration.entity';
import { SocialMediaLink } from './entities/social.media.link.entity';
import { SocialMediaPosts } from './entities/social.media.posts.entity';
import { Tags } from './entities/tags.entity';
import { TrendingNews } from './entities/trending.news.entity';
import { TrendingNowNews } from './entities/trending.now.news.entity';
import { Users } from './entities/users.entity';
import { UsersHasRights } from './entities/users.has.rights.entity';

export * from './lib/entity.module';

export const Entities=[
    Alerts,
    AlexaAudio,
    Attachments,
    Banner,
    BannerVariations,
    Branches,
    BreakingNews,
    Categories,
    ChangeLogs,
    ContentAnalytics,
    Departments,
    EditorsChoiceNews,
    EmailSubscribers,
    Episodes,
    EpisodeVisitors,
    ExclusiveVideos,
    FeaturedNews,
    Infographics,
    InfographicsAttachments,
    InfographicsVisitors,
    JobApplicants,
    JobApplicantsHasLanguages,
    Jobs,
    JobsHasDepartments,
    Languages,
    LiveStreamLinks,
    Markets,
    Menus,
    Message,
    MessageHasAttachments,
    MessageType,
    Nationality,
    NewsAlert,
    News,
    NewsHasCategories,
    NewsHasQuotes,
    NewsHasTags,
    NewsVisitors,
    NotificationSubscriber,
    Pages,
    PagesHasQuotes,
    Presenters,
    Programs,
    ProgramsHasPresenters,
    ProgramsSchedule,
    PushNotification,
    Qualification,
    QuickLinks,
    Quotes,
    Rights,
    Roles,
    SeoDetails,
    Sessions,
    SidebarElements,
    Sidebars,
    SiteConfiguration,
    SocialMediaLink,
    SocialMediaPosts,
    Tags,
    TrendingNews,
    TrendingNowNews,
    Users,
    UsersHasRights
]