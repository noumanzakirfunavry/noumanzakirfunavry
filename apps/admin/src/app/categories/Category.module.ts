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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TempCatComponent } from './tempCat/tempCategory.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CategoryRoutingModule,
        NgChartjsModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DragDropModule
    ],
    exports: [],
    declarations: [
        AddCategoryComponent,
        CategoryComponent,
        FilterComponent,
        TempCatComponent
    ],
    providers: [
        ThemeConstantService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoryModule { }
