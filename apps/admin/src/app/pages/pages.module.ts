import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from "./pages-routing.module";
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { QuillModule } from 'ngx-quill';
import { FilterComponent } from './Filter/filter.component';
import { antdModule } from '../AndModules/andModule';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { AddPagesComponent } from './pages/addPages.component';
import { PagesComponent } from './pages.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TinyEditorModule } from '../modules/tiny-editor/tiny-editor.module';



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        CKEditorModule,
        QuillModule.forRoot(),
        NzUploadModule,
        NzPaginationModule,
        TinyEditorModule
    ],
    exports: [],
    declarations: [
        AddPagesComponent,
        PagesComponent,
        FilterComponent,
    ],
    providers: [
        ThemeConstantService
    ],
})
export class PagesModule { }
