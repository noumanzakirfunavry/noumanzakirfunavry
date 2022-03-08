import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { AddressesRoutingModule } from "./specialNews-routing.module";
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { QuillModule } from 'ngx-quill';
import { antdModule } from '../AndModules/andModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { SpecialNewsComponent } from './specialNews.component';
import { EditorsChoiceComponent } from './editorsChoice/editorsChoice.component';
import { ExclusiveVideosComponent } from './exclusiveVideos/exclusiveVideos.component';
import { FeaturedNewsComponent } from './featuredNews/featuredNews.component';
import { TrendingNowComponent } from './trendingNow/trendingNow.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AddressesRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        QuillModule.forRoot(),
        NzUploadModule
    ],
    exports: [],
    declarations: [
        SpecialNewsComponent,
        EditorsChoiceComponent,
        ExclusiveVideosComponent,
        FeaturedNewsComponent,
        TrendingNowComponent
    ],
    providers: [
        ThemeConstantService
    ],
})
export class SpecialNewsModule { }
