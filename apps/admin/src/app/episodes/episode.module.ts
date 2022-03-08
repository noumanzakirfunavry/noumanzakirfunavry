import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { CategoryRoutingModule} from "./episode-routing.module";
import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { EpisodeComponent } from './episode.component';
import { AddEpisodeComponent } from './addEpisode/add-episode.component';
import { EpisodeFilterComponent } from './episodeFilter/episode-filter.component';
import { antdModule } from '../AndModules/andModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CategoryRoutingModule,
        NgChartjsModule,
        ...antdModule,
        ReactiveFormsModule,
        FormsModule,
        NzUploadModule,
        QuillModule.forRoot(),
        CKEditorModule

    ],
    exports: [],
    declarations: [
        EpisodeComponent,
        AddEpisodeComponent,
        EpisodeFilterComponent
    ],
    providers: [
        ThemeConstantService
    ],
})
export class EpisodeModule { }
