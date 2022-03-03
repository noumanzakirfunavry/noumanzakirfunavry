import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        data: {
            title: 'Admins',
        },

    },
    {
        path: 'list',
        component: UsersComponent,
        data: {
            title: 'All Admins',
        },

    },
    {
        path: 'add',
        component: AddUserComponent,
        data: {
            title: 'Add Admins',
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule { }
