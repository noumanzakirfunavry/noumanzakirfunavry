import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { BreakingNewsRoutingModule } from "./breakingnews-routing.module";
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
// import { DefaultDashboardComponent } from './default/default-dashboard.component';
// import { EcommerceDashboardComponent } from './e-commerce/e-commerce-dashboard.component';
// import { ProjectsDashboardComponent } from './projects/projects-dashboard.component';
// import { CrmDashboardComponent } from './crm/crm-dashboard.component';
import { BreakingNewsComponent } from './breakingnews.component';
import { AddBreakingNewsComponent } from './addBreakingNews/addBreakingNews.component';
import { FilterComponent } from './Filter/filter.component';
import { antdModule } from '../AndModules/andModule';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        BreakingNewsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        NzPaginationModule,
        NzModalModule
    ],
    exports: [],
    declarations: [
        AddBreakingNewsComponent,
        BreakingNewsComponent,
        FilterComponent,
    ],
    providers: [
        ThemeConstantService
    ],
})
export class BreakingNewsModule { }
