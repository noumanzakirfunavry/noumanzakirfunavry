import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakingNewsComponent } from './breakingnews.component';
import { AddBreakingNewsComponent } from './addBreakingNews/addBreakingNews.component';
// import { EditQuickLinksComponent } from './editQuickLinks/editQuicklink.component';
const routes: Routes = [
    {
        path: '',
        component: BreakingNewsComponent,
        data: {
            title: 'Breaking News',
            headerDisplay: "none"
        },

    },
    {
        path: 'list',
        component: BreakingNewsComponent,
        data: {
            title: 'All Breaking News',
            // headerDisplay: "none"
        },

    },
    {
        path: 'add',
        component: AddBreakingNewsComponent,
        data: {
            title: 'Add Breaking News',
            // headerDisplay: "none"
        }
    },
    {
        path: 'update/:id',
        component: AddBreakingNewsComponent,
        data: {
            title: 'Update Breaking News',
            // headerDisplay: "none"
        }
    }
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
export class BreakingNewsRoutingModule { }
