import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { SocialMediaRoutingModule } from "./socialMedia-routing.module";
import { NgChartjsModule } from 'ng-chartjs';

import { ThemeConstantService } from '../shared/services/theme-constant.service';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { QuillModule } from 'ngx-quill';
// import { DefaultDashboardComponent } from './default/default-dashboard.component';
// import { EcommerceDashboardComponent } from './e-commerce/e-commerce-dashboard.component';
// import { ProjectsDashboardComponent } from './projects/projects-dashboard.component';
// import { CrmDashboardComponent } from './crm/crm-dashboard.component';

import { FilterComponent } from './Filter/filter.component';
import { RouterModule } from '@angular/router';
import { antdModule } from '../AndModules/andModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { AddSocialMediaComponent } from './socialMedia/addSocialMedia.component';
import { SocialMediaComponent } from './socialMedia.component';

// const antdModule = [
//     NzButtonModule,
//     NzCardModule,
//     NzAvatarModule,
//     NzRateModule,
//     NzBadgeModule,
//     NzProgressModule,
//     NzRadioModule,
//     NzTableModule,
//     NzDropDownModule,
//     NzTimelineModule,
//     NzTabsModule,
//     NzTagModule,
//     NzListModule,
//     NzCalendarModule,
//     NzToolTipModule,
//     NzCheckboxModule
// ]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SocialMediaRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        QuillModule.forRoot(),
        NzUploadModule
    ],
    exports: [],
    declarations: [
        AddSocialMediaComponent,
        SocialMediaComponent,
        FilterComponent,
    ],
    providers: [
        ThemeConstantService
    ],
})
export class SocialMediaModule { }
