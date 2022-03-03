import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProgramsComponent } from './addProgram/add-programs.component';
import { ProgramsComponent } from './programs.component';

const routes: Routes = [
    {
        path: '',
        component: AddProgramsComponent,
        data: {
            title: 'Programs',
            // headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: ProgramsComponent,
        data: {
            title: 'All Programs',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddProgramsComponent,
        data: {
            title: 'Add Program',
            // headerDisplay: "none"
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProgramsRoutingModule { }
