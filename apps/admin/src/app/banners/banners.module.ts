import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { BannersRoutingModule } from "./banners-routing.module";
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { QuillModule } from 'ngx-quill';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FilterComponent } from './Filter/filter.component';
import { antdModule } from '../AndModules/andModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { AddBannersComponent } from './addBanners/addBanners.component';
import { BannersComponent } from './banners.component';
import { ConfigureBannersComponent } from './configureBanners/configureBanners.component';



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        BannersRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        QuillModule.forRoot(),
        NzUploadModule,
        NzRadioModule
    ],
    exports: [],
    declarations: [
        AddBannersComponent,
        BannersComponent,
        FilterComponent,
        ConfigureBannersComponent
    ],
    providers: [
        ThemeConstantService
    ],
})
export class BannersModule { }
