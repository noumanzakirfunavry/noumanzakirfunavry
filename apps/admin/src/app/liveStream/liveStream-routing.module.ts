import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveStreamComponent } from './liveStream.component';
import { AddLiveStreamComponent } from './liveStream/addLiveStream.component';


// import { EditQuickLinksComponent } from './editQuickLinks/editQuicklink.component';
const routes: Routes = [
    {
        path: '',
        component: LiveStreamComponent,
        data: {
            title: 'Live Stream',
            headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: LiveStreamComponent,
        data: {
            title: 'All Live Streams',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddLiveStreamComponent,
        data: {
            title: 'Add Live Stream',
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
export class LiveStreamRoutingModule { }
