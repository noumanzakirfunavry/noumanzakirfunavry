import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full-layout/full-layout.component";
import { CommonLayoutComponent } from "./layouts/common-layout/common-layout.component";

import { FullLayout_ROUTES } from "./routes/full-layout.routes";
import { CommonLayout_ROUTES } from "./routes/common-layout.routes";
import { LoginGuard } from './shared/guard/login.guard';
import { AuthGuard } from './shared/guard/auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        // canActivate:[AuthGuard],
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    { 
        path: '', 
        // canActivate:[AuthGuard],
        component: CommonLayoutComponent,
        children: CommonLayout_ROUTES 
    },
    { 
        path: 'full', 
        // canActivate:[LoginGuard],
        component: FullLayoutComponent, 
        children: FullLayout_ROUTES
    },
    {
      path: '**',
      redirectTo: ''
    }
    // { 
    //     path: 'full', 
    //     component: FullLayoutComponent, 
    //     children: FullLayout_ROUTES
    // }
     
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, 
        //     { 
        //     preloadingStrategy: PreloadAllModules,
        //     anchorScrolling: 'enabled',
        //     scrollPositionRestoration: 'enabled' 
        // }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}