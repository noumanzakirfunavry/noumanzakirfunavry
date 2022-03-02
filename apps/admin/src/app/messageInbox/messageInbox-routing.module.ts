import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageInboxComponent } from './messageInbox.component';
const routes: Routes = [
    {
        path: '',
        component: MessageInboxComponent,
        data: {
            title: 'Message Inbox',
            // headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: MessageInboxComponent,
        data: {
            title: 'Message Inbox',
            // headerDisplay: "none"
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MessageInboxRoutingModule { }
