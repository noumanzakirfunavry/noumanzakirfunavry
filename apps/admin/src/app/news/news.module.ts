import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { NewsRoutingModule } from "./news-routing.module";
import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NewsComponent } from './news.component';
import { AddNewsComponent } from './addNews/addNews.component';
import { FilterNewsComponent } from './news-Filter/newsFilter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconDefinition } from '@ant-design/icons-angular';
import { LeftOutline, RightOutline } from '@ant-design/icons-angular/icons';
import { antdModule } from '../AndModules/andModule';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import * as  DtosModule from "./../../../../../libs/dtos/src";
const icons: IconDefinition[] = [LeftOutline, RightOutline];


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        NewsRoutingModule,
        NgChartjsModule,
        ...antdModule,
        NzUploadModule,
        NzInputModule,
        NzPaginationModule,
        NzDatePickerModule,
        NzMessageModule,
        NzModalModule,
        NzTreeSelectModule,
        CKEditorModule,
        // DtosModule
    ],
    exports: [],
    declarations: [
        AddNewsComponent,
        FilterNewsComponent,
        NewsComponent
    ],
    providers: [
        ThemeConstantService
    ],
})
export class NewsModule { }
