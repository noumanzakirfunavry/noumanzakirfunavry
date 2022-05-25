import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInfographicsComponent } from './addInfographics/add-Infographics.component';
import { InfographicsComponent } from './infographics.component';
// import { AddTagComponent } from './addInfographics/addTag.component';
// import { TagsComponent } from './infographics.component';
const routes: Routes = [
    {
        path: '',
        component: InfographicsComponent,
        data: {
            title: 'Infographics',
            headerDisplay: "none"
        },
    },
    {
        path: 'list',
        component: InfographicsComponent,
        data: {
            title: 'All Infographics',
            // headerDisplay: "none"
        },
    },
    {
        path: 'add',
        component: AddInfographicsComponent,
        data: {
            title: 'Add Infographics',
            // headerDisplay: "none"
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule { }
