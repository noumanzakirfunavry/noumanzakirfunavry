import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { registerLocaleData, PathLocationStrategy, LocationStrategy } from '@angular/common';
import en from '@angular/common/locales/en';
import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './shared/template/template.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ThemeConstantService } from './shared/services/theme-constant.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { antdModule } from './AndModules/andModule';
import { ChangePasswordComponent } from './changePassword/changePassword.component';
import { TrendingNowComponent } from './specialNews/trendingNow/trendingNow.component';
import { EditorsChoiceComponent } from './editorsChoice/editorsChoice.component';
import { FeaturedNewsComponent } from './specialNews/featuredNews/featuredNews.component';
import { ExclusiveVideosComponent } from './exclusiveVideos/exclusiveVideos.component';


registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        FullLayoutComponent,
        ChangePasswordComponent,
        TrendingNowComponent,
        EditorsChoiceComponent,
        FeaturedNewsComponent,
        ExclusiveVideosComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NzBreadCrumbModule,
        TemplateModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        // ...antdModule
    ],
    providers: [
        { 
            provide: NZ_I18N,
            useValue: en_US, 
        },
        {
            provide: LocationStrategy, 
            useClass: PathLocationStrategy
        },
        ThemeConstantService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
