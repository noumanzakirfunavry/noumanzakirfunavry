import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressesComponent } from './addresses.component';
import { AddAddressesComponent } from './addresses/addAddresses.component';


// import { EditQuickLinksComponent } from './editQuickLinks/editQuicklink.component';
const routes: Routes = [
    {
        path: '',
        component: AddressesComponent,
        data: {
            title: 'Addresses',
            headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: AddressesComponent,
        data: {
            title: 'All Addresses',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddAddressesComponent,
        data: {
            title: 'Add Addresses',
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
export class AddressesRoutingModule { }
