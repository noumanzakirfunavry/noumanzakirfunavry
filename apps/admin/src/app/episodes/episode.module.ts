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
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { FileUploaderModule } from '../modules/file-uploader/file-uploader.module';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';



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
        CKEditorModule,
        NzPaginationModule,
        NzModalModule,
        NzDatePickerModule,
        NzMessageModule,
        FileUploaderModule,
        EditorModule

    ],
    exports: [],
    declarations: [
        EpisodeComponent,
        AddEpisodeComponent,
        EpisodeFilterComponent
    ],
    providers: [
        ThemeConstantService,
        { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
    ],
})
export class EpisodeModule { }
