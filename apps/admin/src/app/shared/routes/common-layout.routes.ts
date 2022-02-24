import { Routes } from '@angular/router';

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
        loadChildren: () => import('../../quickLinks/quicklink.module').then(m => m.QuickLinkModule)
    }
];