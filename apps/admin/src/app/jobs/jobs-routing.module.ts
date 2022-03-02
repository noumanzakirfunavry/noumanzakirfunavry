import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddJobComponent } from './addJobs/add-job.component';
import { JobsComponent } from './jobs.component';

const routes: Routes = [
    {
        path: '',
        component: JobsComponent,
        data: {
            title: 'All Jobs',
            // headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: JobsComponent,
        data: {
            title: 'All Jobs',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddJobComponent,
        data: {
            title: 'Add Job',
            // headerDisplay: "none"
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule { }
