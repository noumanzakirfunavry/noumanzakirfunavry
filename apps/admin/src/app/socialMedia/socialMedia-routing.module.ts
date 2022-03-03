import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialMediaComponent } from './socialMedia.component';
import { AddSocialMediaComponent } from './socialMedia/addSocialMedia.component';


// import { EditQuickLinksComponent } from './editQuickLinks/editQuicklink.component';
const routes: Routes = [
    {
        path: '',
        component: SocialMediaComponent,
        data: {
            title: 'Social Media',
            headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: SocialMediaComponent,
        data: {
            title: 'Social Media',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddSocialMediaComponent,
        data: {
            title: 'Add Social Media',
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
export class SocialMediaRoutingModule { }
