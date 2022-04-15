import { Routes } from '@angular/router';
import { ChangePasswordComponent } from '../changePassword/changePassword.component';
import { AuthGuard } from '../shared/guard/auth.guard';
// import { ChangePasswordComponent } from 'src/app/changePassword/changePassword.component';
// import { EditorsChoiceComponent } from 'src/app/editorsChoice/editorsChoice.component';
// import { ExclusiveVideosComponent } from 'src/app/exclusiveVideos/exclusiveVideos.component';
// import { FeaturedNewsComponent } from 'src/app/featuredNews/featuredNews.component';
// import { TrendingNowComponent } from 'src/app/trendingNow/trendingNow.component';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
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
                loadChildren: () => import('../news/news.module').then(m => m.NewsModule)
            },
            {
                path: 'specialNews',
                loadChildren: () => import('../specialNews/specialNews.module').then(m => m.SpecialNewsModule)
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
                loadChildren: () => import('../categories/Category.module').then(m => m.CategoryModule)
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
                loadChildren: () => import('../tags/tags.module').then(m => m.TagsModule)
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
                loadChildren: () => import('../infographics/infographics.module').then(m => m.InfographicsModule)
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
                loadChildren: () => import('../programs/programs.module').then(m => m.ProgramsModule)
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
                loadChildren: () => import('../episodes/episode.module').then(m => m.EpisodeModule)
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
                loadChildren: () => import('../jobs/jobs.module').then(m => m.JobsModule)
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
                loadChildren: () => import('../quickLinks/quicklink.module').then(m => m.QuickLinkModule)
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
                loadChildren: () => import('../admin-management/users.module').then(m => m.AdminsModule)
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
                loadChildren: () => import('../breakingNews/breakingnews.module').then(m => m.BreakingNewsModule)
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
                loadChildren: () => import('../presenters/presenters.module').then(m => m.PresentersModule)
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
                loadChildren: () => import('../addresses/addresses.module').then(m => m.AddressesModule)
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
                loadChildren: () => import('../subscribers/subscribers.module').then(m => m.SubscribersModule)
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
                loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)
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
                loadChildren: () => import('../menus/menus.module').then(m => m.MenusModule)
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
                loadChildren: () => import('../socialMedia/socialMedia.module').then(m => m.SocialMediaModule)
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
                loadChildren: () => import('../announcements/announcements.module').then(m => m.AnnouncementsModule)
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
                loadChildren: () => import('../banners/banners.module').then(m => m.BannersModule)
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
                loadChildren: () => import('../liveStream/liveStream.module').then(m => m.LiveStreamModule)
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
                loadChildren: () => import('../messageInbox/messageInbox.module').then(m => m.MessageInboxModule)
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
                loadChildren: () => import('../adminLog/adminLog.module').then(m => m.AdminLogModule)
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
                loadChildren: () => import('../tvSchedule/tvSchedule.module').then(m => m.TVScheduleModule)
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
                loadChildren: () => import('../mediaUploader/mediaUploader.module').then(m => m.MediaUploaderModule)
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
                loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule)
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
                loadChildren: () => import('../amazonAlexa/amazonAlexa.module').then(m => m.AmazonAlexaModule)
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