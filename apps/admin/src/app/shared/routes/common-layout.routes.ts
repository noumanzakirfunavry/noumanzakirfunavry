import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },
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
            {path:'',
            loadChildren: () => import('../../categories/Category.module').then(m => m.CategoryModule)
        }
    ]
    },
    {
        path: 'quickLinks',
        loadChildren: () => import('../../quickLinks/quicklink.module').then(m => m.QuickLinkModule)
    }
];