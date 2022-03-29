import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from "./users-routing.module";
import { NgChartjsModule } from 'ng-chartjs';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { ReactiveFormsModule } from '@angular/forms';
// import { DefaultDashboardComponent } from './default/default-dashboard.component';
// import { EcommerceDashboardComponent } from './e-commerce/e-commerce-dashboard.component';
// import { ProjectsDashboardComponent } from './projects/projects-dashboard.component';
// import { CrmDashboardComponent } from './crm/crm-dashboard.component';
import { FormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { UserFilterComponent } from './user-filter/user-filter.component';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { antdModule } from '../AndModules/andModule';





@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        UsersRoutingModule,
        NgChartjsModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        NzPaginationModule
    ],
    exports: [],
    declarations: [
        AddUserComponent,
        UserFilterComponent,
        UsersComponent
    ],
    providers: [
        ThemeConstantService
    ],
})
export class AdminsModule { }
