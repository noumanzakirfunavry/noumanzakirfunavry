import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


@Component({
       selector: 'app-quickLink',
    templateUrl: './quicklink.component.html',
})

export class QuickLinkComponent implements OnInit{
    pagination: {limit: number, pageNo: number, status?: string, title?: string} = {limit: 10, pageNo: 1}
    allQuickLinks: any;
    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData:Array<any> = []; 

    constructor( private apiService: ApiService, private message: NzMessageService ) {}

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
        this.apiService.sendRequest(requests.deleteQuickLink, 'delete', {ids:[link]}).subscribe((res:any) => {
            console.log("DEL-QUICK-LINK", res);
            this.message.create('success', `Quick Link Deleted Successfully`)
        })
    }

    onItemChecked(id: number, checked: boolean): void {
        this.updateCheckedSet(id, checked);
        this.refreshCheckedStatus();
    }

    updateCheckedSet(id: number, checked: boolean): void {
        if (checked) {
            this.setOfCheckedId.add(id);
        } else {
            this.setOfCheckedId.delete(id);
        }
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }

}    