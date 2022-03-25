import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './Category.component';
import { AddCategoryComponent } from './addCategory/addCategoy.component';
import { TempCatComponent } from './tempCat/tempCategory.component';
const routes: Routes = [
    {
        path: '',
        component: CategoryComponent,
        data: {
            title: 'All Categories',
            headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: CategoryComponent,
        data: {
            title: 'All Categories',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddCategoryComponent,
        data: {
            title: 'Add Category',
            headerDisplay: "none"
        },
    },
    {
        path: 'update/:id',
        component: AddCategoryComponent,
        data: {
            title: 'Update Category',
            headerDisplay: "none"
        },

    },
    {
        path: 'temp',
        component: TempCatComponent,
        data: {
            title: 'Temp Category',
            headerDisplay: "none"
        },
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule { }
