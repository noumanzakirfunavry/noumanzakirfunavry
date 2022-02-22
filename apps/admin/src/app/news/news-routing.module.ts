import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent } from './news.component';
import { AddNewsComponent } from './addNews/addNews.component';
import { EditNewsComponent } from './editNews/editNews.component';
const routes: Routes = [
    {
        path: '',
        component: NewsComponent,
        data: {
            title: 'News',
            headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddNewsComponent,
        data: {
            title: 'Add News',
            headerDisplay: "none"
        },

    },
    {
        path: 'edit',
        component: EditNewsComponent,
        data: {
            title: 'Edit News',
            headerDisplay: "none"
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewsRoutingModule { }
