import { Routes } from '@angular/router';
import { LoginGuard } from '../shared/guard/login.guard';

export const FullLayout_ROUTES: Routes = [
    {
        path: 'authentication',canActivate:[LoginGuard],
        loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule)
    }
];