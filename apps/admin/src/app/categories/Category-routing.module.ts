import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './Category.component';
import { AddCategoryComponent } from './addCategory/addCategoy.component';
const routes: Routes = [
    {
        path: 'list',
        component: CategoryComponent,
        data: {
            title: 'category',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddCategoryComponent,
        data: {
            title: 'Add News',
            headerDisplay: "none"
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule { }
