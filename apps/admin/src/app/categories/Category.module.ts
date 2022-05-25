import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { CategoryRoutingModule} from "./Category-routing.module";
import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { CategoryComponent} from './Category.component';
import { AddCategoryComponent } from './addCategory/addCategoy.component';
import { FilterComponent } from './categoryFilter/Filter.component';
import { antdModule } from '../AndModules/andModule';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CategoryRoutingModule,
        NgChartjsModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DragDropModule,
        NzModalModule,
        NzToolTipModule
    ],
    exports: [],
    declarations: [
        AddCategoryComponent,
        CategoryComponent,
        FilterComponent
    ],
    providers: [
        ThemeConstantService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoryModule { }
