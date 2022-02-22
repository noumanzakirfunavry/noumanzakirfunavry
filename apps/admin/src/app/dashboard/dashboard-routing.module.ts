import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from '../categories/Category.component';
const routes: Routes = [
    {
        path: 'home',
        component: CategoryComponent,
        data: {
            title: 'Category',
            headerDisplay: "none"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
