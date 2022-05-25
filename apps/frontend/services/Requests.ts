
// export const baseUrl='http://157.90.67.186:3001/';
// export const baseUrlAdmin='http://157.90.67.186:3002/';
// QA
//  export const baseUrl='http://157.90.67.186:4001/';
//  export const baseUrlAdmin='http://157.90.67.186:4002/';
// domains
export const baseUrlAdmin= "https://backend.admin.staging.cnbcarabia.com/";
export const baseUrl= "https://backend.news.staging.cnbcarabia.com/";

export const newsAPI=baseUrl+'news/api/admin/';
export const adminApi = baseUrlAdmin + 'admin/api/admin/'
export const newsAPIClient=baseUrl+'news/api/client/';
export const adminAPIClient=baseUrlAdmin+'admin/api/client/';
export const requests={
    login:newsAPI+'login',
    signup:newsAPI+'register',
    quickLinks:newsAPIClient+'quickLinks',
    breakingNews:adminApi+'breakingNews',
    branches:adminApi+'branches',
    jobs:adminApi+'jobs',
    // featuredNews: newsAPIClient+'news-types/featured',
    categories: adminAPIClient+'categories',
    newsByCategories:newsAPIClient+'news/get/category/',
    featuredNews:newsAPIClient+'news/get/flags?isFeatured=true',
    NewsById:newsAPIClient+'news/getById/',
    moreMenus: adminAPIClient+'menus/',
    editorChoiceNews:newsAPIClient+'news/get/flags?isEditorsChoice=true',
    trendingNews:newsAPIClient+'news/get/flags?isTrending=true',
    exclusiveVideosNews:newsAPIClient+'news/get/flags?isExclusiveVideos=true',
    latestNews:newsAPIClient+'news/get/flags?',
    search:newsAPIClient+'news/search',
    mostReadNews:newsAPIClient+'news/mostRead?',
    programs:adminAPIClient+'programs/getAll',
    programById:adminAPIClient+'programs/getById',
    episodes:adminAPIClient+'episodes/getAll',
    episodeById:adminAPIClient+'episodes/getById',
    videoNews:newsAPIClient+'news/get/flags?contentType=VIDEO',
    latestMarketCategory:adminAPIClient+'categories/getByTitle?title=أخبار السوق/Market News',
    latestStockCategory:adminAPIClient+'categories/getByTitle?title=أخبار الأسهم/Stock News'
}

export const limitOfList = '20' ;
