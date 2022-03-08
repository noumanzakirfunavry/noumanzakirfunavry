import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { PresentersRoutingModule } from "./presenters-routing.module";
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { QuillModule } from 'ngx-quill';
import { PresentersComponent } from './presenters.component';
import { AddPresentersComponent } from './presenters/addPresenters.component';
import { FilterComponent } from './Filter/filter.component';
import { antdModule } from '../AndModules/andModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PresentersRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        QuillModule.forRoot(),
        NzUploadModule,
        EditorModule
    ],
    exports: [],
    declarations: [
        AddPresentersComponent,
        PresentersComponent,
        FilterComponent,
    ],
    providers: [
        ThemeConstantService,
        { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }  
    ],
})
export class PresentersModule { }
