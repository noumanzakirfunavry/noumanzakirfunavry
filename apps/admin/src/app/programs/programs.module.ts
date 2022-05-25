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
import { TinyEditorModule } from '../modules/tiny-editor/tiny-editor.module';
// import { FileModalComponent } from '../modules/tiny-editor/file-modal/file-modal.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { FileUploaderModule } from '../modules/file-uploader/file-uploader.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';


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
        NzPaginationModule,
        EditorModule,
        FileUploaderModule,
        NzModalModule,
        TinyEditorModule,
        NzToolTipModule
    ],
    exports: [],
    declarations: [
       ProgramsComponent,
       AddProgramsComponent,
       ProgramsFilterComponent,
    //    FileModalComponent
    ],
    providers: [
        ThemeConstantService,
        { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
    ],
})
export class ProgramsModule { }
