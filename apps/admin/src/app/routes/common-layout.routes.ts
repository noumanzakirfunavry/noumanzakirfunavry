import { Routes } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/changePassword/changePassword.component';
// import { ChangePasswordComponent } from 'src/app/changePassword/changePassword.component';
// import { EditorsChoiceComponent } from 'src/app/editorsChoice/editorsChoice.component';
// import { ExclusiveVideosComponent } from 'src/app/exclusiveVideos/exclusiveVideos.component';
// import { FeaturedNewsComponent } from 'src/app/featuredNews/featuredNews.component';
// import { TrendingNowComponent } from 'src/app/trendingNow/trendingNow.component';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('src/app/dashboard/dashboard.module').then(m => m.DashboardModule),
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
    //                 loadChildren: () => import('./src/app/src/app/dashboard/dashboard.module').then(m => m.DashboardModule),
    //             // loadChildren: () => import('./src/app/src/app/news/news.module').then(m => m.NewsModule)
    //         }
    //     ],
    // },
    {
        path: 'news',
        data: {
            title: 'News '
        },
        children: [
            {
                path: '',
                redirectTo: '/news/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('src/app/news/news.module').then(m => m.NewsModule)
            },
            {
                path: 'specialNews',
                loadChildren: () => import('src/app/specialNews/specialNews.module').then(m => m.SpecialNewsModule)
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
                loadChildren: () => import('src/app/categories/Category.module').then(m => m.CategoryModule)
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
                loadChildren: () => import('src/app/tags/tags.module').then(m => m.TagsModule)
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
                loadChildren: () => import('src/app/infographics/infographics.module').then(m => m.InfographicsModule)
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
                loadChildren: () => import('src/app/programs/programs.module').then(m => m.ProgramsModule)
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
                loadChildren: () => import('src/app/episodes/episode.module').then(m => m.EpisodeModule)
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
                loadChildren: () => import('src/app/jobs/jobs.module').then(m => m.JobsModule)
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
                loadChildren: () => import('src/app/quickLinks/quicklink.module').then(m => m.QuickLinkModule)
            }
        ]
    },
    {
        path: 'admins',
        data: {
            title: 'Admins '
        },
        children: [
            {
                path: '',
                redirectTo: '/admins/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('src/app/admin-management/users.module').then(m => m.AdminsModule)
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
                loadChildren: () => import('src/app/breakingNews/breakingnews.module').then(m => m.BreakingNewsModule)
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
                loadChildren: () => import('src/app/presenters/presenters.module').then(m => m.PresentersModule)
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
                loadChildren: () => import('src/app/addresses/addresses.module').then(m => m.AddressesModule)
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
                loadChildren: () => import('src/app/subscribers/subscribers.module').then(m => m.SubscribersModule)
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
                loadChildren: () => import('src/app/pages/pages.module').then(m => m.PagesModule)
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
                loadChildren: () => import('src/app/menus/menus.module').then(m => m.MenusModule)
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
                loadChildren: () => import('src/app/socialMedia/socialMedia.module').then(m => m.SocialMediaModule)
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
                loadChildren: () => import('src/app/announcements/announcements.module').then(m => m.AnnouncementsModule)
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
                loadChildren: () => import('src/app/banners/banners.module').then(m => m.BannersModule)
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
                loadChildren: () => import('src/app/liveStream/liveStream.module').then(m => m.LiveStreamModule)
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
                loadChildren: () => import('src/app/messageInbox/messageInbox.module').then(m => m.MessageInboxModule)
            }
        ]
    },
    {
        path: 'adminLog',
        data: {
            title: 'Admin Log History '
        },
        children: [
            {
                path: '',
                redirectTo: '/adminLog/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('src/app/adminLog/adminLog.module').then(m => m.AdminLogModule)
            }
        ]
    },
    {
        path: 'tvSchedule',
        data: {
            title: 'TV Schedule '
        },
        children: [
            {
                path: '',
                redirectTo: '/tvSchedule/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('src/app/tvSchedule/tvSchedule.module').then(m => m.TVScheduleModule)
            }
        ]
    },
    {
        path: 'mediaUploader',
        data: {
            title: 'Media Uploader'
        },
        children: [
            {
                path: '',
                redirectTo: '/mediaUploader/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('src/app/mediaUploader/mediaUploader.module').then(m => m.MediaUploaderModule)
            }
        ]
    },
    {
        path: 'settings',
        data: {
            title: 'Settings'
        },
        children: [
            {
                path: '',
                redirectTo: '/settings/googleAnalytics',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('src/app/settings/settings.module').then(m => m.SettingsModule)
            }
        ]
    },
    {
        path: 'amazonAlexa',
        data: {
            title: 'Amazon Alexa '
        },
        children: [
            {
                path: '',
                redirectTo: '/amazonAlexa/list',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('src/app/amazonAlexa/amazonAlexa.module').then(m => m.AmazonAlexaModule)
            }
        ]
    },
    {
        path: 'changePassword',
        component: ChangePasswordComponent,
        data: {
            title: 'Change Password'
        }
    },
    // {
    //     path: 'quickLinks',
    //     loadChildren: () => import('./src/app/src/app/quickLinks/quicklink.module').then(m => m.QuickLinkModule)
    // }
];