//............................authentication request dtos................................

export * from './dtos.module';
//...............................Users.............................
export * from './request/admin/get.all.admins.request.dto';
//...............................Alerts.............................
export * from './request/alert/create.alert.request.dto';
export * from './request/alert/get.all.alerts.request.dto';
//...............................Alexa Audio.............................
export * from './request/alexa-audio/create.alexa.audio.request.dto';
export * from './request/alexa-audio/delete.alexa.audio.request.dto';
export * from './request/alexa-audio/get.all.alexa.audio.request.dto';
//...............................Attachments.............................
export * from './request/attachments/create.attachment.request.dto';
export * from './request/attachments/update.attachment.request.dto';
export * from './request/authentication/register.admin.request.dto';
export * from './request/authentication/request.reset.password.request.dto';
export * from './request/authentication/reset.password.request.dto';
export * from './request/authentication/update.password.request.dto';
export * from './request/authentication/user.login.dto';
//...............................Branches............................
export * from './request/branches/add.branch.request.dto';
export * from './request/branches/delete.branch.request.dto';
export * from './request/branches/get.all.branches.request.dto';
export * from './request/branches/update.branch.request.dto';
//...............................breakingNews..........................
export * from './request/breakingNews/add.breaking.news.request.dto';
export * from './request/breakingNews/delete.breaking.news.request.dto';
export * from './request/breakingNews/get.all.breaking.news.request.dto';
export * from './request/breakingNews/update.breaking.news.request.dto';
//...............................categories..........................
export * from './request/categories/add.categories.request.dto';
export * from './request/categories/delete.category.request.dto';
export * from './request/categories/get.all.categories.response.dto';
export * from './request/categories/update.category.request.dto';
export * from './request/categories/update.order.categories.request.dto';
export * from './request/categories/get.all.categories.for.client.request.dto';
//...............................departments..........................
export * from './request/departments/get.all.departments.request.dto';
//...............................Editor choice news.............................
export * from './request/editor-choice-news/update.editor.choice.news.request.dto';
//...............................Episodes.............................
export * from './request/episodes/create.episode.request.dto';
export * from './request/episodes/get.all.episodes.request.dto';
//...............................Exclusive videos.............................
export * from './request/exclusive-videos/create.exclusive.videos.request.dto';
export * from './request/exclusive-videos/get.all.exclusive.videos.request.dto';
export * from './request/exclusive-videos/update.exclusive.videos.request.dto';
//...............................Featured news.............................
export * from './request/featured-news/update.featured.news.request.dto';
export * from './request/generic-get-by-id/get.by.id.request.dto';
//...............................Google analytics.............................
export * from './request/google-analytics/update.google.analytics.request.dto';
//...............................Jobs.............................
export * from './request/jobs/add.job.request.dto';
export * from './request/jobs/delete.job.request.dto';
export * from './request/jobs/get.all.jobs.request.dto';
export * from './request/jobs/update.job.request.dto';
//...............................Live Stream Links.............................
export * from './request/live-stream-links/create.live.stream.links.request.dto';
export * from './request/live-stream-links/get.all.live.stream.links.request.dto';
//...............................Change log.............................
export * from './request/logger/add.log.request.dto';
//...............................Job applicants.............................
export * from './request/job-applicants/get.all.job.applicants.request.dto';
export * from './request/job-applicants/create.job.applicant.request.dto';
//...............................Markets.............................
export * from './request/markets/create.market.request.dto';
export * from './request/markets/update.market.request.dto';
//...............................Menus.............................
export * from './request/menus/create.menu.request.dto';
export * from './request/menus/delete.menu.request.dto';
export * from './request/menus/update.menu.request.dto';
export * from './request/menus/get.menu.request.dto';
export * from './request/menus/update.order.number.request.dto';
//...............................Messages.............................
export * from './request/message/create.message.request.dto';
export * from './request/message/get.all.message.request.dto';
//...............................News.............................
export * from './request/news/create.news.request.dto';
export * from './request/news/get.all.news.request.dto';
export * from './request/news/search.news.request.dto';
export * from './request/news/get.news.by.flags.request.dto';
//............................request dtos................................
export * from './request/pagination.request.dto';
//...........................Pages................................
export * from './request/pages/create.page.request.dto';
export * from './request/pages/update.page.request.dto';
//...............................Presenters.............................
export * from './request/presenters/create.presenters.request.dto';
export * from './request/presenters/delete.presenters.request.dto';
export * from './request/presenters/get.all.presenters.request.dto';
//...............................quickLinks.............................
export * from './request/quickLinks/add.quick.links.request.dto';
export * from './request/quickLinks/delete.quick.links.request';
export * from './request/quickLinks/get.all.quick.links.request.dto';
export * from './request/quickLinks/update.quick.links.request.dto';
//...............................quotes.................................
export * from './request/quotes/add.quote.request.dto';
export * from './request/quotes/get.all.quote.request.dto';
export * from './request/quotes/update.quote.request.dto';
//...............................User Rights.............................
export * from './request/rights/update.user.rights.request.dto';
//...............................Seo.............................
export * from './request/seo/create.seo.request.dto';
//...............................Site configuration.............................
export * from './request/site-configuration/update.site.configuration.request.dto';
export * from './request/social.media.links/create.social.media.link.request.dto';
export * from './request/social.media.links/delete.social.media.links.request.dto';
//...............................social media links.............................
export * from './request/social.media.links/get.all.social.media.links.request.dto';
export * from './request/social.media.links/get.social.media.link.by.id.request.dto';
//...............................Subscribers..........................
export * from './request/subscribers/create.subscriber.request.dto';
export * from './request/subscribers/login.subscriber.request.dto';
export * from './request/subscribers/update.subscriber.request.dto';
//..............................tags.....................................
export * from './request/tags/add.tag.request.dto';
export * from './request/tags/get.all.tags.request.dto';
export * from './request/tags/update.tag.request.dto';
//...............................Trending news.............................
export * from './request/trending-news/post.trending.news.request.dto';
//...............................Users.............................
export * from './response/admin/get.admin.by.id.response.dto';
export * from './response/admin/get.all.admins.response.dto';
export * from './response/alert/get.alert.by.id.request.dto';
//...............................Alerts.............................
export * from './response/alert/get.all.alerts.response.dto';
//...............................Alexa Audio.............................
export * from './response/alexa-audio/get.alexa.audio.by.id.response.dto';
export * from './response/alexa-audio/get.all.alexa.audio.response.dto';
export * from './response/branches/add.branch.response.dto';
//................................branches................................
export * from './response/branches/get.all.branches.reaposne.dto';
export * from './response/branches/get.branch.by.id.resposne.dto';
export * from './response/branches/update.branch.response.dto';
//................................breakingNews/.........................
export * from './response/breakingNews/add.breaking.news.response.dto';
export * from './response/breakingNews/get.all.breaking.news.response.dto';
export * from './response/breakingNews/get.by.id.breaking.news.response.dto';
export * from './response/breakingNews/update.breaking.news.response.dto';
//...............................categories..........................
export * from './response/categories/add.categories.request.dto';
export * from './response/categories/get.all.categories.response.dto';
export * from './response/categories/get.by.id.categories.response.dto';
export * from './response/categories/update.categories.response.dto';
export * from './response/categories/update.order.in.categories.response.dto';
//...............................countries..........................
export * from './response/countries/get.countries.response.dto';
//...............................departments..........................
export * from './response/departments/get.all.departments.response.dto';
//...............................Editors choice news.............................
export * from './response/editors-choice-news/get.all.editors.choice.news.response.dto';
//...............................Exclusive videos.............................
export * from './response/exclusive-videos/get.all.exclusive.videos.response.dto';
export * from './response/exclusive-videos/get.exclusive.video.by.id.response.dto';
//...............................Featured news.............................
export * from './response/featured-news/get.all.featured.news.response.dto';

//.............................response dtos.......................................
export * from './response/generic.response.dto';
//.................................jobs..................................
export * from './response/jobs/add.jobs.response.dto';
export * from './response/jobs/get.all.jobs.response.dto';
export * from './response/jobs/get.job.by.Id.response.dto';
export * from './response/jobs/update.job.response.dto';
//.................................job applications..................................
export * from './response/job-applicants/create.job.applicant.response.dto';
export * from './response/job-applicants/delete.job.applicant.response.dto';
//...............................Live Stream Links.............................
export * from './response/live-stream-links/get.all.live.stream.links.response.dto';
export * from './response/live-stream-links/get.live.stream.link.by.id.response.dto';
//...............................Markets.............................
export * from './response/markets/create.market.response.dto';
export * from './response/markets/get.all.markets.response.dto';
export * from './response/markets/get.market.by.id.response.dto';
export * from './response/markets/update.market.response.dto';
//...............................Menus.............................
export * from './response/menus/get.menus.response.dto';
export * from './response/menus/get.menu.by.id.response.dto';
export * from './response/menus/create.menu.response.dto';
export * from './response/menus/update.menu.response.dto';
export * from './response/menus/delete.menu.response.dto';
//...............................Messages.............................
export * from './response/message/get.all.messages.response.dto';
export * from './response/message/get.message.by.id.response.dto';
//...............................News.............................
export * from './response/news/get.news.by.id.response.dto';
export * from './response/presenters/get.all.presenters.response.dto';
//...............................Pages.............................
export * from './response/pages/create.page.response.dto';
export * from './response/pages/get.page.response.dto';
export * from './response/pages/get.all.pages.response.dto';
export * from './response/pages/delete.page.response.dto';
export * from './response/pages/update.page.response.dto';
//...............................Presenters.............................
export * from './response/presenters/get.presenters.by.id.response.dto';
//...............................quickLinks.............................
export * from './response/quickLinks/add.quick.links.response.dto';
export * from './response/quickLinks/get.all.quick.links.response.dto';
export * from './response/quickLinks/get.quick.link.by.id.response.dto';
export * from './response/quickLinks/update.quick.links.response.dto';
export * from './response/quotes/add.quote.response.dto';
//...............................quotes................................
export * from './response/quotes/get.all.quotes.response.dto';
export * from './response/quotes/update.quote.response.dto';
//...............................rights.............................
export * from './response/rights/rights.response.dto';
//...............................social media links.............................
export * from './response/social.media.links/get.all.social.media.links.response.dto';
export * from './response/social.media.links/get.social.media.links.by.id.response.dto';
//...............................Subscribers.............................
export * from './response/subscribers/create.subscriber.response.dto';
export * from './response/subscribers/get.subscriber.by.id.response.dto';
export * from './response/subscribers/update.subscriber.response.dto';
export * from './response/tags/add.tag.response.dto';
export * from './response/tags/delete.tag.by.id.response.dto';
//...............................tags..................................
export * from './response/tags/get.all.tags.response.dto';
export * from './response/tags/get.tag.by.id.response.dto';
export * from './response/tags/update.tag.response.dto';
//...............................Trending news.............................
export * from './response/trending-news/get.all.trending.news.response.dto';
