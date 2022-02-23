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
export * from './request/quickLinks/get.all.quick.links.request.dto'
    //...............................breakingNews..........................
export * from './request/breakingNews/add.breaking.news.request.dto'



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
    //................................breakingNews/.........................
export * from './response/breakingNews/add.breaking.news.response.dto'