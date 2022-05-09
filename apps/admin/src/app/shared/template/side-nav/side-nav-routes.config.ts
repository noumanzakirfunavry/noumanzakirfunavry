import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
    {
        path: 'dashboard/home',
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
    {
        path: 'news',
        title: 'News',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'file-text',
        submenu: [
            {
                path: 'news/list',
                title: 'All News',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: 'news/add',
                title: 'Add News',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: 'news/specialNews/editorsChoice',
                title: 'Editors Choice',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: 'news/specialNews/exclusiveVideos',
                title: 'Exclusive Videos',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: 'news/specialNews/featuredNews',
                title: 'Featured News',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: 'news/specialNews/trendingNow',
                title: 'Trending Now',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
        ]
    },
    // {
    //     path: 'news',
    //     title: 'News list',
    //     iconType: 'nzIcon',
    //     iconTheme: 'outline',
    //     icon: 'dashboard',
    //     submenu: []
    // },
    {
        path: 'quickLinks',
        title: 'Quick Links',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'link',
        
        submenu: []
    },
    {
        path: 'tags/list',
        title: 'Tags',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'tags',
        submenu: []
    },
    {
        path: 'infographics/list',
        title: 'Infographics',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'info-circle',
        submenu: []
    },
    {
        path: 'programs/list',
        title: 'Programs',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'code',
        submenu: []
    },
    {
        path: 'episodes/list',
        title: 'Episodes',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'play-circle',
        submenu: []
    },
    {
        path: 'category/list',
        title: 'Categories',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: []
    },
    {
        path: 'jobs/list',
        title: 'Careers',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'check-circle',
        submenu: []
    },
    {
        path: 'breakingNews',
        title: 'Breaking News',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'file-text',
        submenu: []
    },
    {
        path: 'presenters',
        title: 'Presenters',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
    {
        path: 'addresses',
        title: 'Addresses',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'aim',
        submenu: []
    },
    {
        path: 'subscribers',
        title: 'Subscribers',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'bell',
        submenu: []
    },
    {
        path: 'pages',
        title: 'Pages',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'file',
        submenu: []
    },
    {
        path: 'menus',
        title: 'Menus',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'menu',
        submenu: []
    },
    {
        path: 'socialMedia',
        title: 'Social Media',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'cluster',
        submenu: []
    },
    {
        path: 'announcements',
        title: 'Announcements',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'sound',
        submenu: []
    },
    {
        path: 'banners',
        title: 'Banners',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'hdd',
        submenu: []
    },
    {
        path: 'liveStream',
        title: 'Live Stream',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'wifi',
        submenu: []
    },
    {
        path: 'messageInbox',
        title: 'Message Inbox',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'mail',
        submenu: []
    },
    {
        path: 'adminLog',
        title: 'Admin Log History',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'user',
        submenu: []
    },
    {
        path: 'tvSchedule',
        title: 'TV Schedule',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'play-squre',
        submenu: []
    },
    {
        path: 'mediaUploader',
        title: 'Media Uploader',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'file-add',
        submenu: []
    },
    {
        path: 'settings',
        title: 'Settings',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'setting',
        submenu: [
            {
                path: 'settings/googleAnalytics',
                title: 'Google Analytics',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: 'settings/homeMarketBanner',
                title: 'Home Market Banner',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    },
    {
        path: 'amazonAlexa',
        title: 'Amazon Alexa',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'build',
        submenu: []
    },
    {
        path: 'admins/list',
        title: 'Admins',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'user',
        submenu: []
    }
   
    // {
    //     path: '',
    //     title: 'Multi Level Menu',
    //     iconType: 'nzIcon',
    //     iconTheme: 'outline',
    //     icon: 'appstore',
    //     submenu: [
    //         { 
    //             path: '',
    //             title: 'Level 1', 
    //             iconType: '', 
    //             icon: '',
    //             iconTheme: '',
    //             submenu: [
    //                 {
    //                     path: '',
    //                     title: 'Level 2',
    //                     iconType: 'nzIcon',
    //                     iconTheme: 'outline',
    //                     icon: '',
    //                     submenu: []
    //                 }    
    //             ] 
    //         }
    //     ]
    // }
]    