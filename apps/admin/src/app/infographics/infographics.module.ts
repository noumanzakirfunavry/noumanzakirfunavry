import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { CategoryRoutingModule } from "./infographics-routing.module";
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
import { InfographicsComponent } from './infographics.component';
import { AddInfographicsComponent } from './addInfographics/add-Infographics.component';
import { InfographicsFilterComponent } from './InfographicsFilter/infographics-filter.component';
import { antdModule } from '../AndModules/andModule';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';

// import { DefaultDashboardComponent } from './default/default-dashboard.component';
// import { EcommerceDashboardComponent } from './e-commerce/e-commerce-dashboard.component';
// import { ProjectsDashboardComponent } from './projects/projects-dashboard.component';
// import { CrmDashboardComponent } from './crm/crm-dashboard.component';



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
        CategoryRoutingModule,
        NgChartjsModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        NzUploadModule,
        QuillModule.forRoot()
    ],
    exports: [],
    declarations: [
        InfographicsComponent,
        AddInfographicsComponent,
        InfographicsFilterComponent
    ],
    providers: [
        ThemeConstantService
    ],
})
export class InfographicsModule { }
