import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentersComponent } from './presenters.component';
import { AddPresentersComponent } from './presenters/addPresenters.component';
// import { EditQuickLinksComponent } from './editQuickLinks/editQuicklink.component';
const routes: Routes = [
    {
        path: '',
        component: PresentersComponent,
        data: {
            title: 'Presenters',
            headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: PresentersComponent,
        data: {
            title: 'All Presenters',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddPresentersComponent,
        data: {
            title: 'Add Presenters',
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
export class PresentersRoutingModule { }
