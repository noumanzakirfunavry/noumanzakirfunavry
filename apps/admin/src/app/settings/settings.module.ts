import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from "./settings-routing.module";
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { QuillModule } from 'ngx-quill';
import { antdModule } from '../AndModules/andModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { SettingsComponent } from './settings.component';
import { GoogleAnalyticsComponent } from './googleAnalytics/googleAnalytics.component';
import { HomeMarketBannerComponent } from './homeMarketBanner/homeMarketBanner.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SettingsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        QuillModule.forRoot(),
        NzUploadModule
    ],
    exports: [],
    declarations: [
        SettingsComponent,
        GoogleAnalyticsComponent,
        HomeMarketBannerComponent
    ],
    providers: [
        ThemeConstantService
    ],
})
export class SettingsModule { }
