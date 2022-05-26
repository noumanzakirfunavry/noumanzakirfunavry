import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { MenusRoutingModule } from "./menus-routing.module";
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { QuillModule } from 'ngx-quill';
import { FilterComponent } from './Filter/filter.component';
import { antdModule } from '../AndModules/andModule';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { AddMenusComponent } from './menus/addMenus.component';
import { MenusComponent } from './menus.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MenusRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        QuillModule.forRoot(),
        NzUploadModule,
        NzModalModule,
        DragDropModule,
        NzToolTipModule
    ],
    exports: [],
    declarations: [
        AddMenusComponent,
        MenusComponent,
        FilterComponent,
    ],
    providers: [
        ThemeConstantService
    ],
})
export class MenusModule { }
