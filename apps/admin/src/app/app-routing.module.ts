import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full-layout/full-layout.component";
import { CommonLayoutComponent } from "./layouts/common-layout/common-layout.component";

import { FullLayout_ROUTES } from "./shared/routes/full-layout.routes";
import { CommonLayout_ROUTES } from "./shared/routes/common-layout.routes";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard/home',
        pathMatch: 'full',
    },
    { 
        path: '', 
        component: CommonLayoutComponent,
        children: CommonLayout_ROUTES 
    },
    { 
        path: 'full', 
        component: FullLayoutComponent, 
        children: FullLayout_ROUTES
    },
    { 
        path: 'full', 
        component: FullLayoutComponent, 
        children: FullLayout_ROUTES
    },
    {
        path: 'news',
        loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
    },
    {
        path: 'category',
        loadChildren: () => import('./categories/Category.module').then(m => m.CategoryModule)
    },
    {
        path: 'quickLinks',
        loadChildren: () => import('./quickLinks/quicklink.module').then(m => m.QuickLinkModule)
    }
     
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { 
            preloadingStrategy: PreloadAllModules,
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled' 
        })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}