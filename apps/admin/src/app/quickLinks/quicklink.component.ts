import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';




@Component({
       selector: 'app-quickLink',
    templateUrl: './quicklink.component.html',
})

export class QuickLinkComponent implements OnInit{
    pagination: {limit: number, pageNo: number, status?: boolean, title?: string} = {limit: 10, pageNo: 1}
    allQuickLinks: any;
    status: boolean;
    indeterminate = false;
    checked = false;
    loading = true;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData = []; 

    constructor( private apiService: ApiService, private message: NzMessageService ) {}

    ngOnInit() {
        this.getAllQuickLinks();
    }

    getAllQuickLinks() {
        this.apiService.sendRequest(requests.getAllQuickLinks, 'get', this.pagination).subscribe((res:any) => {
            this.allQuickLinks= res.quickLinks;
            console.log("ALL-QUICK-LINKS", this.allQuickLinks);
            this.loading = false;
        })
    }

    deleteQuickLink(link: number) {
        this.apiService.sendRequest(requests.deleteQuickLink, 'delete', {ids:[link]}).subscribe((res:any) => {
            console.log("DEL-QUICK-LINK", res);
            this.getAllQuickLinks()
            this.message.create('success', `Quick Link Deleted Successfully`)
        })
    }

    receiveStatus() {
        this.pagination.status= this.status;
        this.pagination.pageNo= 1;
        this.getAllQuickLinks();
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

    onCurrentPageDataChange(listOfCurrentPageData: any): void {
        this.listOfCurrentPageData = listOfCurrentPageData;
        this.refreshCheckedStatus();
      }

}    