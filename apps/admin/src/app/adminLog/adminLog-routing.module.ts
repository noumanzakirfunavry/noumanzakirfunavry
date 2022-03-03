import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLogComponent } from './adminLog.component';
const routes: Routes = [
    {
        path: '',
        component: AdminLogComponent,
        data: {
            title: 'Admin Log History',
            // headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: AdminLogComponent,
        data: {
            title: 'Admin Log History',
            // headerDisplay: "none"
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminLogRoutingModule { }
