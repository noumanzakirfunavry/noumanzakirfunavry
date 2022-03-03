import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorsChoiceComponent } from './editorsChoice/editorsChoice.component';
import { ExclusiveVideosComponent } from './exclusiveVideos/exclusiveVideos.component';
import { FeaturedNewsComponent } from './featuredNews/featuredNews.component';
import { TrendingNowComponent } from './trendingNow/trendingNow.component';


// import { EditQuickLinksComponent } from './editQuickLinks/editQuicklink.component';
const routes: Routes = [
    {
        path: 'editorsChoice',
        component: EditorsChoiceComponent,
        data: {
            title: 'Editors Choice',
            headerDisplay: "none"
        },

    },
    {
        path: 'exclusiveVideos',
        component: ExclusiveVideosComponent,
        data: {
            title: 'Exclusive Videos',
            // headerDisplay: "none"
        },

    },
    {
        path: 'featuredNews',
        component: FeaturedNewsComponent,
        data: {
            title: 'Featured News',
            // headerDisplay: "none"
        },

    },
    {
        path: 'trendingNow',
        component: TrendingNowComponent,
        data: {
            title: 'Trending Now',
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
export class AddressesRoutingModule { }
