import { NgModule } from '@angular/core';
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


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CategoryRoutingModule,
        NgChartjsModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule
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
})
export class CategoryModule { }
