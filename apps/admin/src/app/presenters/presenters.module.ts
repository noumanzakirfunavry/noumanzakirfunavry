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
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


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
        CKEditorModule
    ],
    exports: [],
    declarations: [
        AddPresentersComponent,
        PresentersComponent,
        FilterComponent,
    ],
    providers: [
        ThemeConstantService
    ],
})
export class PresentersModule { }
