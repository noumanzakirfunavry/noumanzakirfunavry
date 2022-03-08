import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribersComponent } from './subscribers.component';
import { ViewSubscribersComponent } from './subscribers/viewSubscribers.component';


// import { EditQuickLinksComponent } from './editQuickLinks/editQuicklink.component';
const routes: Routes = [
    {
        path: '',
        component: SubscribersComponent,
        data: {
            title: 'Subscribers',
            headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: SubscribersComponent,
        data: {
            title: 'All Subscribers',
            // headerDisplay: "none"
        },

    },
    {
        path: 'view',
        component: ViewSubscribersComponent,
        data: {
            title: 'View Subscribers Details',
            // headerDisplay: "none"
        },

    },
    // {
    //     path: 'edit',
    //     component: EditQuickLinksComponent,
    //     data: {
    //         title: 'Edit News',
    //         headerDisplay: "none"
    //     },

    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SubscribersRoutingModule { }
