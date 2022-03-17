import { Component, OnInit } from '@angular/core'
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';
import { ThemeConstantService } from '../shared/services/theme-constant.service';


@Component({
       selector: 'app-quickLink',
    templateUrl: './quicklink.component.html',
})

export class QuickLinkComponent implements OnInit{
    pagination: {limit: number, pageNo: number, status?: string, title?: string} = {limit: 10, pageNo: 1}
    allQuickLinks: any;

    constructor( private colorConfig: ThemeConstantService, private apiService: ApiService ) {}

    ngOnInit() {
        this.getAllQuickLinks();
    }

    getAllQuickLinks() {
        this.apiService.sendRequest(requests.getAllQuickLinks, 'get', this.pagination).subscribe((res:any) => {
            this.allQuickLinks= res.quickLinks;
            console.log("ALL-QUICK-LINKS", this.allQuickLinks);
        })
    }

    deleteQuickLink(link: number) {
        this.apiService.sendRequest(requests.deleteQuickLink + link, 'delete').subscribe((res:any) => {
            console.log("DEL-QUICK-LINK", res);
        })
    }

}    