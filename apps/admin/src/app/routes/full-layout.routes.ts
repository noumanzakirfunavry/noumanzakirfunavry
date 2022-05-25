import { Routes } from '@angular/router';
import { ServerDownComponent } from '../layouts/server-down/server-down.component';
import { LoginGuard } from '../shared/guard/login.guard';

export const FullLayout_ROUTES: Routes = [
    {
        path: 'authentication',canActivate:[LoginGuard],
        loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'server-down',
        component: ServerDownComponent,
    },
];