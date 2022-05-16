import { environment } from "../../../environments/environment";

export const requests = {
    login: environment.baseUrlAdmin + 'authentication/login',
    logout: environment.baseUrlAdmin + 'authentication/logout',
    updatePassword: environment.baseUrlAdmin + 'authentication/password/update',
    resetPassword: environment.baseUrlAdmin+'authentication/request/password/reset',
    setPassword: environment.baseUrlAdmin+'authentication/password/reset/',
    requestPasswordReset: environment.baseUrlAdmin + 'authentication/request/password/reset',
    addNewAttachment: environment.baseUrlAdmin+'attachments',
    getAttachmentDetailsById: 'http://localhost:3333/api/attachment/',
    getAllAttachments: environment.baseUrlAdmin+'attachments/getAll',
    updateAttachment: 'http://localhost:3333/api/attachment/',
    deleteAttachment: environment.baseUrlAdmin+'attachments',
    getAllAdmins: environment.baseUrlAdmin + 'getAll',
    onBoardNewUser: 'http://localhost:3333/api/user',
    getUserById: environment.baseUrlAdmin + '',
    deleteUsers: environment.baseUrlAdmin + '',
    registerUser: environment.baseUrlAdmin + 'authentication/register',
    updateUser: environment.baseUrlAdmin + 'authentication/update/',
    getAllRights: environment.baseUrlAdmin + 'rights',
    deleteRight: 'http://localhost:3333/api/rights',
    updateUserRights: 'http://localhost:3333/api/rights/updateUser',
    deleteBannerVariation: 'http://localhost:3333/api/banner/variation',
    createNewBannerVariation: 'http://localhost:3333/api/banner/variation',
    updateBannerVariation: 'http://localhost:3333/api/banner/variation/',
    createNewBanner: 'http://localhost:3333/api/admin/banner',
    deleteBanner: 'http://localhost:3333/api/admin/banner/',
    getAllBanners: 'http://localhost:3333/api/admin/banner',
    getBannerById: 'http://localhost:3333/api/admin/banner/',
    editBanner: 'http://localhost:3333/api/admin/banner/',
    getAllBranches: environment.baseUrlAdmin + 'branches/getAll',
    addNewBranch: environment.baseUrlAdmin + 'branches/add',
    updateBranch: environment.baseUrlAdmin + 'branches/update/',
    deleteBranches: environment.baseUrlAdmin + 'branches/delete/',
    getBranchById: environment.baseUrlAdmin + 'branches/getById/',
    addChangeLog: 'http://localhost:3333/api/changeLog',
    getEntityChangeLog: 'http://localhost:3333/api/changeLog/',
    incrementNewsView: 'http://localhost:3333/api/news/analytics/incrementView/',
    getTopNews: 'http://localhost:3333/api/news/analytics/top',
    updateTrendingNews: environment.baseUrlNews + 'news-type/trending/update',
    // addTrendingNews: 'http://localhost:3333/api/admin/news/trending',
    // deleteTrendingNews: 'http://localhost:3333/api/admin/news/trending/',
    // getTrendingNewsById: 'http://localhost:3333/api/admin/news/trending/',
    getAllTrendingNews: environment.baseUrlNews + 'news-type/trending/getAll',
    updateBreakingNews: environment.baseUrlAdmin + 'breakingNews/update/',
    addBreakingNews: environment.baseUrlAdmin + 'breakingNews/add',
    deleteBreakingNews: environment.baseUrlAdmin + 'breakingNews/delete',
    getBreakingNewsById: environment.baseUrlAdmin + 'breakingNews/getById/',
    getAllBreakingNews: environment.baseUrlAdmin + 'breakingNews/getAll',
    updateFeaturedNews: environment.baseUrlNews + 'news-type/featured/update',
    // addFeaturedNews: 'http://localhost:3333/api/admin/news/featured',
    // deleteFeaturedNews: 'http://localhost:3333/api/admin/news/featured/',
    // getFeaturedNewsById: 'http://localhost:3333/api/admin/news/featured/',
    getAllFeaturedNews: environment.baseUrlNews + 'news-type/featured/getAll',
    updateEditorsChoiceNews: environment.baseUrlNews + 'news-type/editors-choice-news/update',
    // addEditorsChoiceNews: 'http://localhost:3333/api/admin/news/editorChoice',
    // deleteEditorsChoiceNews: 'http://localhost:3333/api/admin/news/editorChoice/',
    // getEditorsChoiceNews: 'http://localhost:3333/api/admin/news/editorChoice/',
    getAllEditorsChoiceNews: environment.baseUrlNews + 'news-type/editors-choice-news/getAll',
    getAllNews: environment.baseUrlNews+'news/getAll',
    addNews: environment.baseUrlNews+'news/add',
    updateNews: environment.baseUrlNews+'news/update/',
    deleteNews: environment.baseUrlNews+'news/delete',
    getNewsById: environment.baseUrlNews+'news/getById/',
    getRelatedNews: 'http://localhost:3333/api/admin/new/related/',
    addNewDepartment: 'http://localhost:3333/api/department',
    updateDepartment: 'http://localhost:3333/api/department/',
    deleteDepartment: 'http://localhost:3333/api/department/',
    getAllDepartments: 'http://localhost:3333/api/departments',
    getDepartmentById: 'http://localhost:3333/api/department/',
    addNewTag: environment.baseUrlNews + 'tags/add',
    updateTag: environment.baseUrlNews + 'tags/update/',
    getAllTags: environment.baseUrlNews + 'tags/getAll',
    getTagById: environment.baseUrlNews + 'tags/getById/',
    deleteTags: environment.baseUrlNews + 'tags/delete/',
    addNewQuote: environment.baseUrlNews + 'quotes/add',
    updateQuote: environment.baseUrlNews + 'quotes/update/',
    getAllQuotes: environment.baseUrlNews + 'quotes/getAll',
    updateSystemConfiguration: 'http://localhost:3333/api/configuration',
    updateGoogleSettings: 'http://localhost:3333/api/configuration/google',
    updateLiveTVLink: 'http://localhost:3333/api/configuration/liveTV',
    getSystemConfiguration: 'http://localhost:3333/api/configuration',
    addNewQuickLink: environment.baseUrlNews + 'quickLinks/add',
    updateQuickLink: environment.baseUrlNews + 'quickLinks/update/',
    getAllQuickLinks: environment.baseUrlNews + 'quickLinks/getAll',
    getQuickLinkById: environment.baseUrlNews + 'quickLinks/getById/',
    deleteQuickLink: environment.baseUrlNews + 'quickLinks/delete',
    addNewQualification: 'http://localhost:3333/api/qualification',
    updateQualification: 'http://localhost:3333/api/qualification/',
    getAllQualifications: 'http://localhost:3333/api/qualification',
    addNewLanguage: 'http://localhost:3333/api/language',
    updateLanguage: 'http://localhost:3333/api/language/',
    getAllLanguages: 'http://localhost:3333/api/language',
    addNewNationality: 'http://localhost:3333/api/nationality',
    updateNationality: 'http://localhost:3333/api/nationality/',
    getAllNationalities: 'http://localhost:3333/api/nationality',
    updateProgramSchedule: 'http://localhost:3333/api/program/schedule/',
    getProgramSchedule: 'http://localhost:3333/api/program/schedule/',
    addProgramSchedule: 'http://localhost:3333/api/admin/programs/schedule',
    getProgramScheduleById: 'http://localhost:3333/api/admin/programs/schedule/',
    deleteProgramSchedule: 'http://localhost:3333/api/admin/programs/schedule/',
    addNewProgramPresenter: 'http://localhost:3333/api/presenter',
    updateProgPresenter: 'http://localhost:3333/api/presenter/',
    getAllProgramPresenters: 'http://localhost:3333/api/program/presenter',
    getProgramPresenterById: 'http://localhost:3333/api/program/presenter/',
    updateProgramPresenter: 'http://localhost:3333/api/program/presenter/',
    addProgramEpisode: environment.baseUrlAdmin + 'episodes',
    updateProgramEpisode: environment.baseUrlAdmin + 'episodes/',
    getAllEpisodes: environment.baseUrlAdmin + 'episodes/getAll',
    deleteProgramEpisode: environment.baseUrlAdmin + 'episodes',
    getProgramEpisodeById: environment.baseUrlAdmin + 'episodes/',
    addNewProgram: environment.baseUrlAdmin + 'programs',
    getAllPrograms: environment.baseUrlAdmin + 'programs/getAll',
    getProgramById: environment.baseUrlAdmin + 'programs/getById/',
    updateProgramDetails: environment.baseUrlAdmin + 'programs/',
    deleteProgram: environment.baseUrlAdmin + 'programs',
    updateSEODeatil: 'http://localhost:3333/api/seo/',
    getSEODetailById: 'http://localhost:3333/api/seo/',
    getSEODetailByEntity: 'http://localhost:3333/api/seo/',
    createNewJob: environment.baseUrlAdmin + 'jobs/add',
    getAllJobs: environment.baseUrlAdmin + 'jobs/getAll',
    applyForJob: 'http://localhost:3333/api/job/apply',
    getJobApplicants: 'http://localhost:3333/api/job/applicants',
    deleteJobs: environment.baseUrlAdmin + 'jobs/delete/',
    updateJob: environment.baseUrlAdmin + 'jobs/update/',
    getJobById: environment.baseUrlAdmin + 'jobs/getById/',
    getAllAlexa: 'http://localhost:3333/api/admin/configuration/alexa',
    getAlexaById: 'http://localhost:3333/api/admin/configuration/alexa/',
    addAlexa: 'http://localhost:3333/api/admin/configuration/alexa',
    deleteAlexa: 'http://localhost:3333/api/admin/configuration/alexa/',
    updateAlexa: 'http://localhost:3333/api/admin/configuration/alexa/',
    getAllLiveStreamLinks: 'http://localhost:3333/api/admin/liveStreamLinksAll',
    getLiveStreamLinkById: 'http://localhost:3333/api/admin/liveStreamLinksAll/',
    addLiveStreamLink: 'http://localhost:3333/api/admin/liveStreamLinksAll',
    deleteLiveStreamLinks: 'http://localhost:3333/api/admin/liveStreamLinks/',
    updateLiveStreamLinks: 'http://localhost:3333/api/admin/liveStreamLinks/',
    getAllMarketBanner: 'http://localhost:3333/api/admin/marketBannerAll',
    getMarketBannerById: 'http://localhost:3333/api/admin/marketBanner/',
    addMarketBanner: 'http://localhost:3333/api/admin/marketBanner',
    deleteMarketBanner: 'http://localhost:3333/api/admin/marketBanner/',
    updateMarkertBanner: 'http://localhost:3333/api/admin/marketBanner/',
    getAllInfographics: 'http://localhost:3333/api/admin/infographicsAll',
    addInfographics: 'http://localhost:3333/api/admin/infographics',
    updateInfographics: 'http://localhost:3333/api/admin/infographics/',
    deleteInfographics: 'http://localhost:3333/api/admin/infographics/',
    getInfographicsById: 'http://localhost:3333/api/admin/infographics/',
    getAllCategories: environment.baseUrlAdmin + 'categories/getAll',
    getCategoryById: environment.baseUrlAdmin + 'categories/getById/',
    deleteCategories: environment.baseUrlAdmin + 'categories/delete/',
    addCategory: environment.baseUrlAdmin + 'categories/add',
    updateCategory: environment.baseUrlAdmin + 'categories/update/',
    updateCategoryOrder: environment.baseUrlAdmin + 'categories/updateOrder',
    updateExclusiveVideos: environment.baseUrlAdmin + 'exclusive-videos/update',
    // addExclusiveVideos: 'http://localhost:3333/api/admin/videos/exclusive',
    // deleteExclusiveVideos: 'http://localhost:3333/api/admin/videos/exclusive/',
    // getExclusiveVideosById: 'http://localhost:3333/api/admin/videos/exclusive/',
    getAllExclusiveVideos: environment.baseUrlAdmin + 'exclusive-videos/getAll',
    getAllPresenters: environment.baseUrlAdmin + 'presenters/getAll',
    deletePresenters: environment.baseUrlAdmin + 'presenters',
    getPresenterById: environment.baseUrlAdmin + 'presenters/',
    addPresenter: environment.baseUrlAdmin + 'presenters',
    updatePresenter: environment.baseUrlAdmin + 'presenters/',
    getAllSubscribers: 'http://localhost:3333/api/subscribersAll',
    addSubscribers: 'http://localhost:3333/api/subscribers/sign-up',
    subscriberLogin: 'http://localhost:3333/api/subscribers/login',
    updateSubscriber: 'http://localhost:3333/api/subscribers/sign-up',
    getSubscriberById: 'http://localhost:3333/api/subscribers/',
    deleteSubscribers: 'http://localhost:3333/api/subscribers/',
    getAllPages: environment.baseUrlAdmin + 'pages/getAll',
    deletePages: 'http://localhost:3333/api/pages/',
    getPageById: environment.baseUrlAdmin + 'pages/getById/',
    addPage: environment.baseUrlAdmin + 'pages/create',
    updatePage: environment.baseUrlAdmin + 'pages/update/',
    getAllMenus: environment.baseUrlAdmin + 'menus/getAll',
    deleteMenus: environment.baseUrlAdmin + 'menus/delete',
    getMenuById: environment.baseUrlAdmin + 'menus/getById/',
    addMenu: environment.baseUrlAdmin + 'menus/create',
    updateMenu: environment.baseUrlAdmin + 'menus/update/',
    updateMenuOrder: environment.baseUrlAdmin + 'menus/updateOrder',
    getAllSocialMediaLinks: 'http://localhost:3333/api/socialMediaLinksAll',
    deleteSocialMediaLinks: 'http://localhost:3333/api/socialMediaLinks/',
    getSocialMediaLinkById: 'http://localhost:3333/api/socialMediaLinks/',
    addSocialMediaLink: 'http://localhost:3333/api/socialMediaLinks',
    updateSocialMediaLinks: 'http://localhost:3333/api/socialMediaLinks/',
    deleteMessages: 'http://localhost:3333/api/messages/',
    getMessageById: 'http://localhost:3333/api/messages/',
    getAllMessages: 'http://localhost:3333/api/messages',
    addMessage: 'http://localhost:3333/api/messages',
    updateMessage: 'http://localhost:3333/api/messages/',
    deleteAdminLogs: 'http://localhost:3333/api/adminLogs/',
    getAdminLogById: 'http://localhost:3333/api/adminLogs/',
    getAllAdminLogs: 'http://localhost:3333/api/adminLogsAll',
    addAdminLog: 'http://localhost:3333/api/adminLogs',
    updateAdminLog: 'http://localhost:3333/api/adminLogs/',
    deleteAlerts: 'http://localhost:3333/api/alerts/',
    getAlertById: 'http://localhost:3333/api/alerts/',
    getAllAlerts: 'http://localhost:3333/api/alertsAll',
    addAlert: 'http://localhost:3333/api/alerts',
    updateAlert: 'http://localhost:3333/api/alerts/',
    deleteTVSchedules: 'http://localhost:3333/api/tvSchedules/',
    getTVScheduleById: 'http://localhost:3333/api/tvSchedules/',
    getAllTVSchedules: 'http://localhost:3333/api/tvSchedules',
    addTVSchedule: 'http://localhost:3333/api/tvSchedules',
    updateTVSchedule: 'http://localhost:3333/api/tvSchedules',
    updateGoogleAnalytics: 'http://localhost:3333/api/googleAnalytics/',
    getTotalRequests: ''

}