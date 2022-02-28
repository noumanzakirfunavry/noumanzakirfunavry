import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickLinkComponent } from './quicklink.component';
import { AddQuickLinksComponent } from './addQuickLinks/addQuickLinks.component';
// import { EditQuickLinksComponent } from './editQuickLinks/editQuicklink.component';
const routes: Routes = [
    {
        path: '',
        component: QuickLinkComponent,
        data: {
            title: 'Quick Link',
            headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: QuickLinkComponent,
        data: {
            title: 'All Quick Links',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddQuickLinksComponent,
        data: {
            title: 'Add Quick Link',
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
export class QuickRoutingModule { }
