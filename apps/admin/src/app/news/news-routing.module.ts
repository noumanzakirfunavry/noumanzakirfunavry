import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent } from './news.component';
import { AddNewsComponent } from './addNews/addNews.component';
const routes: Routes = [
    {
        path: 'list',
        component: NewsComponent,
        // data: {
        //     title: 'News',
        //     // headerDisplay: "none"
        // },

    },
    {
        path: 'add',
        component: AddNewsComponent,
        data: {
            title: 'Add News',
            // headerDisplay: "none"
        },

    },
    {
        path: 'edit/:id',
        component: AddNewsComponent,
        data: {
            title: 'Edit News',
            // headerDisplay: "none"
        },

    },
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewsRoutingModule { }
