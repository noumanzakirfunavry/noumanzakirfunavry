import { Routes } from '@angular/router';
// import { ChangePasswordComponent } from 'src/app/changePassword/changePassword.component';
// import { EditorsChoiceComponent } from 'src/app/editorsChoice/editorsChoice.component';
// import { ExclusiveVideosComponent } from 'src/app/exclusiveVideos/exclusiveVideos.component';
// import { FeaturedNewsComponent } from 'src/app/featuredNews/featuredNews.component';
// import { TrendingNowComponent } from 'src/app/trendingNow/trendingNow.component';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    // {
    //     path: 'dasboard',
    //     data: {
    //         title: 'Dashboard '
    //     },
    //     children: [
    //         // {
    //         //     path: '',
    //         //     redirectTo: '/',
    //         //     pathMatch: 'full'
    //         // }, 
    //         {
    //             path: '',
    //                 loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    //             // loadChildren: () => import('../../news/news.module').then(m => m.NewsModule)
    //         }
    //     ],
    // },
    {
        path: 'news',
        data: {
            title: 'All News '
        },
        children: [
            {
                path: '',
                redirectTo: '/news/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../news/news.module').then(m => m.NewsModule)
            }
        ],
    },
    {
        path: 'category',
        data: {
            title: 'Categories '
        },
        children: [
            {
                path: '',
                redirectTo: '/category/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../categories/Category.module').then(m => m.CategoryModule)
            }
        ]
    },
    {
        path: 'tags',
        data: {
            title: 'Tags '
        },
        children: [
            {
                path: '',
                redirectTo: '/tags/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../tags/tags.module').then(m => m.TagsModule)
            }
        ]
    },
    {
        path: 'infographics',
        data: {
            title: 'Infographics '
        },
        children: [
            {
                path: '',
                redirectTo: '/infographics/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../infographics/infographics.module').then(m => m.InfographicsModule)
            }
        ]
    },
    {
        path: 'programs',
        data: {
            title: 'Programs '
        },
        children: [
            {
                path: '',
                redirectTo: '/programs/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../programs/programs.module').then(m => m.ProgramsModule)
            }
        ]
    },
    {
        path: 'episodes',
        data: {
            title: 'Episodes '
        },
        children: [
            {
                path: '',
                redirectTo: '/episodes/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../episodes/episode.module').then(m => m.EpisodeModule)
            }
        ]
    },
    {
        path: 'jobs',
        data: {
            title: 'Jobs '
        },
        children: [
            {
                path: '',
                redirectTo: '/jobs/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../jobs/jobs.module').then(m => m.JobsModule)
            }
        ]
    },
    {
        path: 'quickLinks',
        data: {
            title: 'Quick Links '
        },
        children: [
            {
                path: '',
                redirectTo: '/quickLinks/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../quickLinks/quicklink.module').then(m => m.QuickLinkModule)
            }
        ]
    },
    {
        path: 'admins',
        data: {
            title: 'All Admins '
        },
        children: [
            {
                path: '',
                redirectTo: '/admins/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../admin-management/users.module').then(m => m.AdminsModule)
            }
        ]
    },
    {
        path: 'breakingNews',
        data: {
            title: 'Breaking News '
        },
        children: [
            {
                path: '',
                redirectTo: '/breakingNews/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../breakingNews/breakingNews.module').then(m => m.BreakingNewsModule)
            }
        ]
    },
    {
        path: 'presenters',
        data: {
            title: 'Presenters '
        },
        children: [
            {
                path: '',
                redirectTo: '/presenters/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../presenters/presenters.module').then(m => m.PresentersModule)
            }
        ]
    },
    {
        path: 'addresses',
        data: {
            title: 'Addresses '
        },
        children: [
            {
                path: '',
                redirectTo: '/addresses/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../addresses/addresses.module').then(m => m.AddressesModule)
            }
        ]
    },
    {
        path: 'subscribers',
        data: {
            title: 'Subscribers '
        },
        children: [
            {
                path: '',
                redirectTo: '/subscribers/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../subscribers/subscribers.module').then(m => m.SubscribersModule)
            }
        ]
    },
    {
        path: 'pages',
        data: {
            title: 'Pages '
        },
        children: [
            {
                path: '',
                redirectTo: '/pages/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule)
            }
        ]
    },
    {
        path: 'menus',
        data: {
            title: 'Menus '
        },
        children: [
            {
                path: '',
                redirectTo: '/menus/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../menus/menus.module').then(m => m.MenusModule)
            }
        ]
    },
    {
        path: 'socialMedia',
        data: {
            title: 'Social Media '
        },
        children: [
            {
                path: '',
                redirectTo: '/socialMedia/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../socialMedia/socialMedia.module').then(m => m.SocialMediaModule)
            }
        ]
    },
    {
        path: 'announcements',
        data: {
            title: 'Announcements '
        },
        children: [
            {
                path: '',
                redirectTo: '/announcements/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../announcements/announcements.module').then(m => m.AnnouncementsModule)
            }
        ]
    },
    {
        path: 'banners',
        data: {
            title: 'Banners '
        },
        children: [
            {
                path: '',
                redirectTo: '/banners/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../banners/banners.module').then(m => m.BannersModule)
            }
        ]
    },
    {
        path: 'liveStream',
        data: {
            title: 'Live Stream '
        },
        children: [
            {
                path: '',
                redirectTo: '/liveStream/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../liveStream/liveStream.module').then(m => m.LiveStreamModule)
            }
        ]
    },
    {
        path: 'messageInbox',
        data: {
            title: 'Message Inbox '
        },
        children: [
            {
                path: '',
                redirectTo: '/messageInbox/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../messageInbox/messageInbox.module').then(m => m.MessageInboxModule)
            }
        ]
    },
    // {
    //     path: 'changePassword',
    //     component: ChangePasswordComponent,
    //     data: {
    //         title: 'Change Password'
    //     }
    // },
    // {
    //     path: 'trendingNow',
    //     component: TrendingNowComponent,
    //     data: {
    //         title: 'Trending Now'
    //     }
    // },
    // {
    //     path: 'editorsChoice',
    //     component: EditorsChoiceComponent,
    //     data: {
    //         title: 'Editors Choice'
    //     }
    // },
    // {
    //     path: 'featuredNews',
    //     component: FeaturedNewsComponent,
    //     data: {
    //         title: 'Featured News'
    //     }
    // },
    // {
    //     path: 'exclusiveVideos',
    //     component: ExclusiveVideosComponent,
    //     data: {
    //         title: 'Exclusive Videos'
    //     }
    // }
    // {
    //     path: 'quickLinks',
    //     loadChildren: () => import('../../quickLinks/quicklink.module').then(m => m.QuickLinkModule)
    // }
];