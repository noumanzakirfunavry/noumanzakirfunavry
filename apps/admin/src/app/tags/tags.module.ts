import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { CategoryRoutingModule} from "./tags-routing.module";
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
import { AddTagComponent } from './addTag/addTag.component';
import { TagFilterComponent } from './tagFilter/tag-filter.component';
import { TagsComponent } from './tags.component';
// import { NzFormControlComponent } from 'ng-zorro-antd/form';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMessageModule } from 'ng-zorro-antd/message';

// import { DefaultDashboardComponent } from './default/default-dashboard.component';
// import { EcommerceDashboardComponent } from './e-commerce/e-commerce-dashboard.component';
// import { ProjectsDashboardComponent } from './projects/projects-dashboard.component';
// import { CrmDashboardComponent } from './crm/crm-dashboard.component';
import { FormsModule } from '@angular/forms';
import { NzDemoFormDynamicRuleComponent } from './addTag/dynamic-rule';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';



const antdModule = [
    NzButtonModule,
    NzCardModule,
    NzAvatarModule,
    NzRateModule,
    NzBadgeModule,
    NzProgressModule,
    NzRadioModule,
    NzTableModule,
    NzDropDownModule,
    NzTimelineModule,
    NzTabsModule,
    NzTagModule,
    NzListModule,
    NzCalendarModule,
    NzToolTipModule,
    NzCheckboxModule,
    NzFormModule,
    // NzFormLabelComponent,
    NzSwitchModule,
    FormsModule,
    NzInputModule,
    NzSelectModule,
    NzCascaderModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzIconModule,
    NzToolTipModule,
    NzButtonModule,
    NzMessageModule
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CategoryRoutingModule,
        NgChartjsModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule
    ],
    exports: [],
    declarations: [
        AddTagComponent,
        TagFilterComponent,
        TagsComponent,
        NzDemoFormDynamicRuleComponent
    ],
    providers: [
        ThemeConstantService
    ],
})
export class TagsModule { }
