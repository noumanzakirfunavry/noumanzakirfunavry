import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { QuickRoutingModule } from "./quicklink-routing.module";
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzModalModule } from 'ng-zorro-antd/modal';
// import { DefaultDashboardComponent } from './default/default-dashboard.component';
// import { EcommerceDashboardComponent } from './e-commerce/e-commerce-dashboard.component';
// import { ProjectsDashboardComponent } from './projects/projects-dashboard.component';
// import { CrmDashboardComponent } from './crm/crm-dashboard.component';
import { QuickLinkComponent } from './quicklink.component';
import { AddQuickLinksComponent } from './addQuickLinks/addQuickLinks.component';
import { FilterComponent } from './Filter/filter.component';
import { antdModule } from '../AndModules/andModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        QuickRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        NzPaginationModule,
        NzModalModule
    ],
    exports: [],
    declarations: [
        AddQuickLinksComponent,
        QuickLinkComponent,
        FilterComponent,
    ],
    providers: [
        ThemeConstantService
    ],
})
export class QuickLinkModule { }
