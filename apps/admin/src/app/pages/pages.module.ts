import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from "./pages-routing.module";
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { QuillModule } from 'ngx-quill';
import { FilterComponent } from './Filter/filter.component';
import { antdModule } from '../AndModules/andModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { AddPagesComponent } from './pages/addPages.component';
import { PagesComponent } from './pages.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        EditorModule,
        QuillModule.forRoot(),
        NzUploadModule
    ],
    exports: [],
    declarations: [
        AddPagesComponent,
        PagesComponent,
        FilterComponent,
    ],
    providers: [
        ThemeConstantService,
        { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }  
    ],
})
export class PagesModule { }
