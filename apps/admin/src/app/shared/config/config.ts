import { environment } from "src/environments/environment";


export const requests = {
    login: 'http://157.90.67.186:3002/authentication/login',
    logout: 'http://157.90.67.186:3002/authentication/logout',
    updatePassword: 'http://localhost:3333/api/admin/changePassword',
    resetPassword: 'http://localhost:3333/api/admin/resetPassword',
    requestPasswordReset: 'http://localhost:3333/api/admin/requestResetPassword',
    addNewAttachment: 'http://localhost:3333/api/social-media-links/',
    getAttachmentDetailsById: 'http://localhost:3333/api/attachment/',
    getAllAttachments: 'http://localhost:3333/api/attachment/',
    updateAttachment: 'http://localhost:3333/api/attachment/',
    deleteAttachment: 'http://localhost:3333/api/attachment/',
    getAllAdmins: 'http://localhost:3333/api/admin/getAllUsers',
    onBoardNewUser: 'http://localhost:3333/api/user',
    getUserById: 'http://localhost:3333/api/admin/users/',
    deleteUsers: 'http://localhost:3333/api/admin/users',
    registerUser: 'http://localhost:3333/api/admin/register',
    getAllRights: 'http://localhost:3333/api/rights',
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
    updateTrendingNews: 'http://localhost:3333/api/admin/news/trending/',
    addTrendingNews: 'http://localhost:3333/api/admin/news/trending',
    deleteTrendingNews: 'http://localhost:3333/api/admin/news/trending/',
    getTrendingNewsById: 'http://localhost:3333/api/admin/news/trending/',
    getAllTrendingNews: 'http://localhost:3333/api/admin/news/trendingAll',
    updateBreakingNews: 'http://localhost:3333/api/admin/news/breaking/',
    addBreakingNews: 'http://localhost:3333/api/admin/news/breaking',
    deleteBreakingNews: 'http://localhost:3333/api/admin/news/breaking/',
    getBreakingNewsById: 'http://localhost:3333/api/admin/news/breaking/',
    getAllBreakingNews: 'http://localhost:3333/api/admin/news/breaking',
    updateFeaturedNews: 'http://localhost:3333/api/admin/news/featured/',
    addFeaturedNews: 'http://localhost:3333/api/admin/news/featured',
    deleteFeaturedNews: 'http://localhost:3333/api/admin/news/featured/',
    getFeaturedNewsById: 'http://localhost:3333/api/admin/news/featured/',
    getAllFeaturedNews: 'http://localhost:3333/api/admin/news/featuredAll',
    updateEditorsChoiceNews: 'http://localhost:3333/api/admin/news/editorChoice',
    addEditorsChoiceNews: 'http://localhost:3333/api/admin/news/editorChoice',
    deleteEditorsChoiceNews: 'http://localhost:3333/api/admin/news/editorChoice/',
    getEditorsChoiceNews: 'http://localhost:3333/api/admin/news/editorChoice/',
    getAllEditorsChoiceNews: 'http://localhost:3333/api/admin/news/editorChoiceAll',
    getAllNews: 'http://localhost:3333/api/admin/allnews',
    addNews: 'http://localhost:3333/api/admin/allnews',
    updateNews: 'http://localhost:3333/api/admin/allnews/',
    deleteNews: 'http://localhost:3333/api/admin/allnews/',
    getNewsById: 'http://localhost:3333/api/admin/allnews/',
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
    addProgramEpisode: 'http://localhost:3333/api/program/episode',
    updateProgramEpisode: 'http://localhost:3333/api/program/episode/',
    getAllEpisodes: 'http://localhost:3333/api/programs/episodes/',
    deleteProgramEpisode: 'http://localhost:3333/api/program/episode/',
    getProgramEpisodeById: 'http://localhost:3333/api/program/episode/',
    addNewProgram: 'http://localhost:3333/api/program',
    getAllPrograms: 'http://localhost:3333/api/program',
    getProgramById: 'http://localhost:3333/api/program/',
    updateProgramDetails: 'http://localhost:3333/api/program/',
    deleteProgram: 'http://localhost:3333/api/program/',
    updateSEODeatil: 'http://localhost:3333/api/seo/',
    getSEODetailById: 'http://localhost:3333/api/seo/',
    getSEODetailByEntity: 'http://localhost:3333/api/seo/',
    createNewJob: environment.baseUrlAdmin + 'jobs/add',
    getAllJobs: environment.baseUrlAdmin + 'jobs/getAll',
    applyForJob: 'http://localhost:3333/api/job/apply',
    getJobApplicants: 'http://localhost:3333/api/job/applicants',
    deleteJobs: environment.baseUrlAdmin + 'jobs/delete/',
    updateJob: environment.baseUrlAdmin + 'jobs/update',
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
    updateExclusiveVideos: 'http://localhost:3333/api/admin/videos/exclusive/',
    addExclusiveVideos: 'http://localhost:3333/api/admin/videos/exclusive',
    deleteExclusiveVideos: 'http://localhost:3333/api/admin/videos/exclusive/',
    getExclusiveVideosById: 'http://localhost:3333/api/admin/videos/exclusive/',
    getAllExclusiveVideos: 'http://localhost:3333/api/admin/videos/exclusive',
    getAllPresenters: 'http://localhost:3333/api/admin/presentersAll',
    deletePresenters: 'http://localhost:3333/api/admin/presenters/',
    getPresenterById: 'http://localhost:3333/api/admin/presenters/',
    addPresenter: 'http://localhost:3333/api/admin/presenters',
    updatePresenter: 'http://localhost:3333/api/admin/presenters/',
    getAllSubscribers: 'http://localhost:3333/api/subscribersAll',
    addSubscribers: 'http://localhost:3333/api/subscribers/sign-up',
    subscriberLogin: 'http://localhost:3333/api/subscribers/login',
    updateSubscriber: 'http://localhost:3333/api/subscribers/sign-up',
    getSubscriberById: 'http://localhost:3333/api/subscribers/',
    deleteSubscribers: 'http://localhost:3333/api/subscribers/',
    getAllPages: 'http://localhost:3333/api/pagesAll',
    deletePages: 'http://localhost:3333/api/pages/',
    getPageById: 'http://localhost:3333/api/pages/',
    addPage: 'http://localhost:3333/api/pages',
    updatePage: 'http://localhost:3333/api/pages/',
    getAllMenus: 'http://localhost:3333/api/menus',
    deleteMenus: 'http://localhost:3333/api/menus/',
    getMenuById: 'http://localhost:3333/api/menus/',
    addMenu: 'http://localhost:3333/api/menus',
    updateMenu: 'http://localhost:3333/api/menus',
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