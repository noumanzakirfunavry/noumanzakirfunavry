import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { AdminLogRoutingModule} from "./adminLog-routing.module";
import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { AdminLogFilterComponent } from './adminLogFilter/adminLog-filter.component';
import { AdminLogComponent } from './adminLog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { antdModule } from '../AndModules/andModule';



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AdminLogRoutingModule,
        NgChartjsModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        NzModalModule,
        NzPaginationModule
    ],
    exports: [],
    declarations: [
        AdminLogFilterComponent,
        AdminLogComponent,
        // NzDemoFormDynamicRuleComponent
    ],
    providers: [
        ThemeConstantService
    ],
})
export class AdminLogModule { }
