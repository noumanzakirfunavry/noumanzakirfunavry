import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AddPagesComponent } from './pages/addPages.component';


// import { EditQuickLinksComponent } from './editQuickLinks/editQuicklink.component';
const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        data: {
            title: 'Pages',
            headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: PagesComponent,
        data: {
            title: 'All Pages',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddPagesComponent,
        data: {
            title: 'Add Page',
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
export class PagesRoutingModule { }
