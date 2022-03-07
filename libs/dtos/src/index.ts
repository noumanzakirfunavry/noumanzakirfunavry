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
    //...............................Jobs.............................
export * from './request/jobs/add.job.request.dto'
export * from './request/jobs/get.all.jobs.request.dto'
export * from './request/jobs/update.job.request.dto'
export * from './request/jobs/delete.job.request.dto'
    //...............................Branches............................
export * from './request/branches/add.branch.request.dto'
export * from './request/branches/delete.branch.request.dto'
export * from './request/branches/get.all.branches.request.dto'
export * from './request/branches/update.branch.request.dto'
    //...............................departments..........................
export * from './request/departments/get.all.departments.request.dto'
    //...............................categories..........................
export * from './request/categories/add.categories.request.dto'
export * from './request/categories/delete.category.request.dto'
export * from './request/categories/get.all.categories.response.dto'
export * from './request/categories/update.category.request.dto'

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
    //.................................jobs..................................
export * from './response/jobs/add.jobs.response.dto'
export * from './response/jobs/get.all.jobs.response.dto'
export * from './response/jobs/get.job.by.Id.response.dto'
export * from './response/jobs/update.job.response.dto'
    //................................branches................................
export * from './response/branches/get.all.branches.reaposne.dto'
export * from './response/branches/get.branch.by.id.resposne.dto'
export * from './response/branches/update.branch.response.dto'
export * from './response/branches/add.branch.response.dto'
    //...............................departments..........................
export * from './response/departments/get.all.departments.response.dto'
    //...............................categories..........................
export * from './response/categories/add.categories.request.dto'
export * from './response/categories/get.all.categories.response.dto'
export * from './response/categories/get.by.id.categories.response.dto'
export * from './response/categories/update.categories.response.dto'
    //................................breakingNews/.........................
export * from './response/breakingNews/add.breaking.news.response.dto'

