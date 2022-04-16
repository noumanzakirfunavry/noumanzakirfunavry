import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { CategoryRoutingModule} from "./tags-routing.module";
import { NgChartjsModule } from 'ng-chartjs';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { AddTagComponent } from './addTag/addTag.component';
import { TagFilterComponent } from './tagFilter/tag-filter.component';
import { TagsComponent } from './tags.component';
import { ReactiveFormsModule } from '@angular/forms';

// import { DefaultDashboardComponent } from './default/default-dashboard.component';
// import { EcommerceDashboardComponent } from './e-commerce/e-commerce-dashboard.component';
// import { ProjectsDashboardComponent } from './projects/projects-dashboard.component';
// import { CrmDashboardComponent } from './crm/crm-dashboard.component';
import { FormsModule } from '@angular/forms';
import { NzDemoFormDynamicRuleComponent } from './addTag/dynamic-rule';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { antdModule } from '../AndModules/andModule';
import { NzModalModule } from 'ng-zorro-antd/modal';



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CategoryRoutingModule,
        NgChartjsModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        NzPaginationModule,
        NzModalModule
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
