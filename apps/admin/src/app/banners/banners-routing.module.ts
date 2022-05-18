import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannersComponent } from './banners.component';
import { AddBannersComponent } from './addBanners/addBanners.component';
import { ConfigureBannersComponent } from './configureBanners/configureBanners.component';


// import { EditQuickLinksComponent } from './editQuickLinks/editQuicklink.component';
const routes: Routes = [
    {
        path: '',
        component: BannersComponent,
        data: {
            title: 'Banners',
            headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: BannersComponent,
        data: {
            title: 'All Banners',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddBannersComponent,
        data: {
            title: 'Add Banner',
            // headerDisplay: "none"
        },

    },
    {
        path: 'configure',
        component: ConfigureBannersComponent,
        data: {
            title: 'Configure Default Banner',
            // headerDisplay: "none"
        },

    }
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
export class BannersRoutingModule { }
