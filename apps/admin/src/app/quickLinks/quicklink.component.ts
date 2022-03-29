import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';

export class Data extends Pagination {
    title?: string;

    constructor() {
        super()
        this.title= ''
    }
}

@Component({
       selector: 'app-quickLink',
    templateUrl: './quicklink.component.html',
})

export class QuickLinkComponent implements OnInit{
    pagination: Data= new Data();
    allQuickLinks: any;
    quickLinksCount: any;
    status: boolean;
    indeterminate = false;
    checked = false;
    loading = true;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData: any = []; 

    constructor( private apiService: ApiService, private message: NzMessageService ) {}

    ngOnInit() {
        this.getAllQuickLinks();
    }

    getAllQuickLinks() {
        this.apiService.sendRequest(requests.getAllQuickLinks, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allQuickLinks= res.response.quickLinks;
            this.quickLinksCount= res.response.totalCount;
            console.log("ALL-QUICK-LINKS", this.allQuickLinks);
            console.log("QUICK-LINKS-COUNT", this.quickLinksCount);
            this.loading = false;
        },err => {
            this.loading = false;
          })
    }

    clean(obj:any) {
        for (const propName in obj) {
          if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName] === []) {
            delete obj[propName];
          }
        }
        return obj
    }

    deleteQuickLink(link: number) {
        this.apiService.sendRequest(requests.deleteQuickLink, 'delete', {ids:[link]}).subscribe((res:any) => {
            console.log("DEL-QUICK-LINK", res);
            this.getAllQuickLinks()
            this.message.create('success', `Quick Link Deleted Successfully`)
        })
    }

    onPageIndexChange(pageNo: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, pageNo: pageNo})
        this.getAllQuickLinks();
    }

    onPageSizeChange(limit: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, limit: limit})
        this.getAllQuickLinks();
    }

    receiveStatus() {
        this.pagination.status= this.status;
        console.log("PAG-STATUS", this.pagination.status);
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

}    