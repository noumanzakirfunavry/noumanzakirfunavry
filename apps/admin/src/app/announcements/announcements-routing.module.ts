import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './announcements.component';
import { AddAnnouncementsComponent } from './announcements/addAnnouncements.component';


// import { EditQuickLinksComponent } from './editQuickLinks/editQuicklink.component';
const routes: Routes = [
    {
        path: '',
        component: AnnouncementsComponent,
        data: {
            title: 'Announcements',
            headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: AnnouncementsComponent,
        data: {
            title: 'All Announcements',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddAnnouncementsComponent,
        data: {
            title: 'Add Announcement',
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
export class AnnouncementsRoutingModule { }
