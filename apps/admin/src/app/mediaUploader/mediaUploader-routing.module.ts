import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaUploaderComponent } from './mediaUploader.component';
const routes: Routes = [
    {
        path: '',
        component: MediaUploaderComponent,
        data: {
            title: 'Media Uploader',
            // headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: MediaUploaderComponent,
        data: {
            title: 'Media Uploader',
            // headerDisplay: "none"
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MediaUploaderRoutingModule { }
