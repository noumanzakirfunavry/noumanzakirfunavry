import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


export class Data extends Pagination {
    title?: string;
    branchId?: Array<any>;

    constructor() {
        super()
        this.title= '',
        this.branchId= []
    }
}

@Component({
       selector: 'app-jobs',
    templateUrl: './jobs.component.html',
})

export class JobsComponent implements OnInit {
    pagination: Data = new Data();
    allJobs: any;
    jobsCount: any;
    indeterminate = false;
    checked = false;
    loading = true;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData = [];


    constructor(private apiService: ApiService, private message: NzMessageService ) {}

    ngOnInit(): void {
        this.getAllJobs()
    }

    getAllJobs() {
        this.apiService.sendRequest(requests.getAllJobs, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allJobs= res.response.jobs;
            this.jobsCount= res.response.totalCount;
            console.log("ALL-JOBS", this.allJobs);
            this.loading= false;
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

    deleteJobs(jobId: number) {
        this.apiService.sendRequest(requests.deleteJobs, 'delete', {ids:[jobId]}).subscribe((res:any) => {
            console.log("DELETE-JOBS", res);
            this.getAllJobs();
            this.message.create('success', `Job Deleted Successfully`)
        })
    }

    onPageIndexChange(pageNo: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, pageNo: pageNo})
        this.getAllJobs();
    }

    onPageSizeChange(limit: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, limit: limit})
        this.getAllJobs();
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