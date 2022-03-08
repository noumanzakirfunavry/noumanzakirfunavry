import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TVScheduleComponent } from './tvSchedule.component';
const routes: Routes = [
    {
        path: '',
        component: TVScheduleComponent,
        data: {
            title: 'TV Schedule',
            // headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: TVScheduleComponent,
        data: {
            title: 'TV Schedule',
            // headerDisplay: "none"
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TVScheduleRoutingModule { }
