import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusComponent } from './menus.component';
import { AddMenusComponent } from './menus/addMenus.component';


// import { EditQuickLinksComponent } from './editQuickLinks/editQuicklink.component';
const routes: Routes = [
    {
        path: '',
        component: MenusComponent,
        data: {
            title: 'Menus',
            headerDisplay: "none"
        },
    },
    {
        path: 'list',
        component: MenusComponent,
        data: {
            title: 'All Menus',
            // headerDisplay: "none"
        },
    },
    {
        path: 'add',
        component: AddMenusComponent,
        data: {
            title: 'Add Menu Item',
            // headerDisplay: "none"
        },
    },
    {
        path: 'update/:id',
        component: AddMenusComponent,
        data: {
            title: 'Update Menu Item',
            // headerDisplay: "none"
        },
    },
    // {
    //     path: 'edit',
    //     component: EditQuickLinksComponent,
    //     data: {
    //         title: 'Edit News',
    //         headerDisplay: "none"
    //     },

    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MenusRoutingModule { }
