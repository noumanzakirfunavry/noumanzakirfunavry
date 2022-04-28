import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ProgramsRoutingModule} from "./programs-routing.module";
import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { ProgramsComponent } from './programs.component';
import { AddProgramsComponent } from './addProgram/add-programs.component';
import { ProgramsFilterComponent } from './programFilter/programs-filter.component';
import { antdModule } from '../AndModules/andModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { QuillModule } from 'ngx-quill';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ProgramsRoutingModule,
        NgChartjsModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        NzUploadModule,
        CKEditorModule,
        QuillModule.forRoot(),
        NzPaginationModule
    ],
    exports: [],
    declarations: [
       ProgramsComponent,
       AddProgramsComponent,
       ProgramsFilterComponent
    ],
    providers: [
        ThemeConstantService
    ],
})
export class ProgramsModule { }
