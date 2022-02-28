import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        data: {
            title: 'Users',
        },

    },
    {
        path: 'list',
        component: UsersComponent,
        data: {
            title: 'Users',
        },

    },
    {
        path: 'add',
        component: AddUserComponent,
        data: {
            title: 'Add Admin',
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule { }
