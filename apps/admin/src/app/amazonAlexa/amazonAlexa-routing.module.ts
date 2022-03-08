import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmazonAlexaComponent } from './amazonAlexa.component';


const routes: Routes = [
    {
        path: '',
        component: AmazonAlexaComponent,
        data: {
            title: 'Amazon Alexa',
            // headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: AmazonAlexaComponent,
        data: {
            title: 'Amazon Alexa',
            // headerDisplay: "none"
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AmazonAlexaRoutingModule { }
