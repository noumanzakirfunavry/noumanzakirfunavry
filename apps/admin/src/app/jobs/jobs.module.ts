import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { CategoryRoutingModule } from "./jobs-routing.module";
import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { JobsComponent } from './jobs.component';
import { AddJobComponent } from './addJobs/add-job.component';
import { JobFilterComponent } from './filterJobs/job-filter.component';
import { antdModule } from '../AndModules/andModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
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
        EditorModule,
        QuillModule.forRoot()

    ],
    exports: [],
    declarations: [
        JobsComponent,
        AddJobComponent,
        JobFilterComponent
    ],
    providers: [
        ThemeConstantService,
        { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }   
    ],
})
export class JobsModule { }
