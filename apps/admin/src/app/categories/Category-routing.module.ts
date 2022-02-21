import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './Category.component';
import { AddCategoryComponent } from './addCategory/addCategoy.component';
import { EditCategoryComponent } from './editCategory/editCategory.component';
const routes: Routes = [
    {
        path: 'add',
        component: AddCategoryComponent,
        data: {
            title: 'Add News',
            headerDisplay: "none"
        },

    },
    {
        path: 'edit',
        component: EditCategoryComponent,
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
export class CategoryRoutingModule { }
