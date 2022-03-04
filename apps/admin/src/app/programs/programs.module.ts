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
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';


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
        EditorModule,
        QuillModule.forRoot()
    ],
    exports: [],
    declarations: [
       ProgramsComponent,
       AddProgramsComponent,
       ProgramsFilterComponent
    ],
    providers: [
        ThemeConstantService,
        { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }  
    ],
})
export class ProgramsModule { }
