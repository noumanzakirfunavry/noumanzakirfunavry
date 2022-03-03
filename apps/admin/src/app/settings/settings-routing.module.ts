import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleAnalyticsComponent } from './googleAnalytics/googleAnalytics.component';
import { HomeMarketBannerComponent } from './homeMarketBanner/homeMarketBanner.component';


// import { EditQuickLinksComponent } from './editQuickLinks/editQuicklink.component';
const routes: Routes = [
    {
        path: 'googleAnalytics',
        component: GoogleAnalyticsComponent,
        data: {
            title: 'Google Analytics'
        },
    },
    {
        path: 'homeMarketBanner',
        component: HomeMarketBannerComponent,
        data: {
            title: 'Home Market Banner'
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
export class SettingsRoutingModule { }
