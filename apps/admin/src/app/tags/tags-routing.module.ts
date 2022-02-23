import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTagComponent } from './addTag/addTag.component';
import { TagsComponent } from './tags.component';
const routes: Routes = [
    {
        path: '',
        component: TagsComponent,
        data: {
            title: 'Tags',
            // headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: TagsComponent,
        data: {
            title: 'Tags',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddTagComponent,
        data: {
            title: 'Add Tag',
            // headerDisplay: "none"
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule { }
