import { Component, OnInit } from '@angular/core'
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


@Component({
       selector: 'app-pages',
    templateUrl: './pages.component.html',
})

export class PagesComponent implements OnInit {
    pagination: Pagination = new Pagination()
    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    allPages: any;
    loading= true;
    pagesCount: any;

    constructor( private apiService: ApiService ) {}

    ngOnInit(): void {
        this.getAllPages();
    }

    getAllPages() {
        this.apiService.sendRequest(requests.getAllPages, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allPages= res.data;
            this.pagesCount= res.data?.totalCount;
            console.log("ALL-PAGES", this.allPages);
            this.loading= false;
        },err => {
            this.loading= false;
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

    onPageIndexChange(pageNo: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, pageNo: pageNo})
        this.getAllPages();
    }

    onPageSizeChange(limit: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, limit: limit})
        this.getAllPages();
    }

    updateCheckedSet(id: number, checked: boolean): void {
        if (checked) {
            this.setOfCheckedId.add(id);
        } else {
            this.setOfCheckedId.delete(id);
        }
    }

    onItemChecked(id: number, checked: boolean): void {
        this.updateCheckedSet(id, checked);
        this.refreshCheckedStatus();
    }

    onAllChecked(checked: boolean): void {
        this.allPages.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.allPages.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }
}    