import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEpisodeComponent } from './addEpisode/add-episode.component';
import { EpisodeComponent } from './episode.component';

const routes: Routes = [
    {
        path: '',
        component: EpisodeComponent,
        data: {
            title: 'All Episodes',
            // headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: EpisodeComponent,
        data: {
            title: 'All Episodes',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddEpisodeComponent,
        data: {
            title: 'Add Episode',
            // headerDisplay: "none"
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule { }
