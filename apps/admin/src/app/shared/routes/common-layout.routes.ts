import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: 'news',
        loadChildren: () => import('../../news/news.module').then(m => m.NewsModule)
    },
    {
        path: 'category',
        loadChildren: () => import('../../categories/Category.module').then(m => m.CategoryModule)
    },
    {
        path: 'quickLinks',
        loadChildren: () => import('../../quickLinks/quicklink.module').then(m => m.QuickLinkModule)
    }
];