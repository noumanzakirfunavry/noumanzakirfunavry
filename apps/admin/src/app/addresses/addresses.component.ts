import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


export class Data extends Pagination {
    title?: string;
    publishers?: Array<any>;

    constructor() {
        super()
        this.title= '',
        this.publishers= []
    }
}

@Component({
       selector: 'app-addresses',
    templateUrl: './addresses.component.html',
})

export class AddressesComponent implements OnInit{

    pagination: Data= new Data();
    allBranches: any;
    branchesCount: any;
    indeterminate = false;
    checked = false;
    loading = true;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData = [];

    constructor(private apiService: ApiService, private message: NzMessageService ) {}

    ngOnInit(): void {
        this.getAllBranches();
    }

    getAllBranches() {
        this.apiService.sendRequest(requests.getAllBranches, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allBranches= res.response.branches;
            this.branchesCount= res.response.totalCount;
            console.log("ALL-BRANCHES", this.allBranches);
            this.loading= false;
        },err => {
            this.loading = false;
            throw this.handleError(err);
          })
    }

    handleError(err: any) {
        if (err) {
          this.allBranches = [];
          this.branchesCount= 0;
        }
        return err
      }

    clean(obj:any) {
        for (const propName in obj) {
          if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName] === []) {
            delete obj[propName];
          }
        }
        return obj
    }

    deleteBranch(branchId: any) {
        this.apiService.sendRequest(requests.deleteBranches, 'delete', {ids:[branchId]}).subscribe((res:any) => {
            console.log("DELETE-BRANCH", res);
            this.getAllBranches();
            this.message.create('success', `Address Deleted Successfully`);
        }) 
    }

    onPageIndexChange(pageNo: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, pageNo: pageNo})
        this.getAllBranches();
    }

    onPageSizeChange(limit: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, limit: limit})
        this.getAllBranches();
    }

    receiveStatus(data: Pagination) {
        this.pagination={...this.pagination, status: data.status, title: data.title, publisher: data.publisher};
        this.pagination.pageNo= 1;
        this.getAllBranches();        
    }

    receiveFilter(data: Pagination) {
        this.pagination={...this.pagination, status: data.status, title: data.title, publisher: data.publisher};
        this.pagination.pageNo= 1;
        this.getAllBranches();        
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

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }
}    