import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../shared/shared.module';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { QuillModule } from 'ngx-quill';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { antdModule } from '../../AndModules/andModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../../demo-components-share/demo-components-share.module';
import { TinyEditorComponent } from './tiny-editor.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { FileModalComponent } from './file-modal/file-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        QuillModule.forRoot(),
        NzUploadModule,
        NzRadioModule,
        EditorModule,
        NzModalModule
    ],
    exports: [],
    declarations: [
        TinyEditorComponent,
        FileModalComponent
    ],
    providers: [
        { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
    ],
})
export class BannersModule { }
