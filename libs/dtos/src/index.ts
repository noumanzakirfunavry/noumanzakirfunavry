//............................authentication request dtos................................

export * from './request/authentication/user.login.dto';
export * from './request/authentication/update.password.request.dto';
export * from './request/authentication/register.admin.request.dto';
export * from './request/authentication/request.reset.password.request.dto'
export * from './request/authentication/reset.password.request.dto'

import { from } from 'rxjs';

export * from './dtos.module';
//............................request dtos................................
export * from './request/pagination.request.dto'

    //..............................tags.....................................
export * from './request/tags/add.tag.request.dto'
export * from './request/tags/update.tag.request.dto'
export * from './request/tags/get.all.tags.request.dto'
    //...............................quotes.................................
export * from './request/quotes/add.quote.request.dto'
export * from './request/quotes/get.all.quote.request.dto'
export * from './request/quotes/update.quote.request.dto'
    //...............................quickLinks.............................
export * from './request/quickLinks/add.quick.links.request.dto'
export * from './request/quickLinks/delete.quick.links.request'
export * from './request/quickLinks/update.quick.links.request.dto'
//...............................social media links.............................
export * from './request/social.media.links/get.all.social.media.links.request.dto'
export * from './request/social.media.links/get.social.media.link.by.id.request.dto'
export * from './request/social.media.links/delete.social.media.links.request.dto'
export * from './request/social.media.links/create.social.media.link.request.dto'
//...............................User Rights.............................
export * from './request/rights/update.user.rights.request.dto'
//...............................Alexa Audio.............................
export * from './request/alexa-audio/create.alexa.audio.request.dto'
export * from './request/alexa-audio/get.all.alexa.audio.request.dto'
export * from './request/alexa-audio/delete.alexa.audio.request.dto'
//...............................Change log.............................
export * from './request/logger/add.log.request.dto'
//...............................Presenters.............................
export * from './request/presenters/create.presenters.request.dto'
export * from './request/presenters/get.all.presenters.request.dto'
export * from './request/presenters/delete.presenters.request.dto'
//...............................Users.............................
export * from './request/admin/get.all.admins.request.dto'
//...............................News.............................
export * from './request/news/create.news.request.dto'
//...............................Seo.............................
export * from './request/seo/create.seo.request.dto'





//.............................response dtos..............................
export * from './response/generic.response.dto'

    //...............................tags..................................
export * from './response/tags/get.all.tags.response.dto'
export * from './response/tags/get.tag.by.id.response.dto'
export * from './response/tags/delete.tag.by.id.response.dto'
export * from './response/tags/add.tag.response.dto'
export * from './response/tags/update.tag.response.dto'
    //...............................quotes................................
export * from './response/quotes/get.all.quotes.response.dto'
export * from './response/quotes/add.quote.response.dto' 
export * from './response/quotes/update.quote.response.dto'
    //...............................quickLinks.............................
export * from './response/quickLinks/add.quick.links.response.dto'
export * from './response/quickLinks/get.all.quick.links.response.dto'
export * from './response/quickLinks/get.quick.link.by.id.response.dto'
export * from './response/quickLinks/update.quick.links.response.dto'
//...............................rights.............................
export * from './response/rights/rights.response.dto'
//...............................social media links.............................
export * from './response/social.media.links/get.all.social.media.links.response.dto'
export * from './response/social.media.links/get.social.media.links.by.id.response.dto'
//...............................Alexa Audio.............................
export * from './response/alexa-audio/get.alexa.audio.by.id.response.dto'
export * from './response/alexa-audio/get.all.alexa.audio.response.dto'
//...............................Presenters.............................
export * from './response/presenters/get.presenters.by.id.response.dto'
export * from './response/presenters/get.all.presenters.response.dto'
//...............................Users.............................
export * from './response/admin/get.admin.by.id.response.dto'
export * from './response/admin/get.all.admins.response.dto'

