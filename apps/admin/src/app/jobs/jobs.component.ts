import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


@Component({
       selector: 'app-jobs',
    templateUrl: './jobs.component.html',
})

export class JobsComponent implements OnInit {
    pagination: Pagination = new Pagination();
    allJobs: any;
    jobsCount: any;
    indeterminate = false;
    checked = false;
    loading = true;
    setOfCheckedId = new Set<number>();


    constructor(
        private apiService: ApiService, 
        private message: NzMessageService, 
        private modal: NzModalService ) {}

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
            throw this.handleError(err)
          })
    }

    handleError(err: any) {
        if (err) {
          this.allJobs = [];
          this.jobsCount= 0;
        }
        return err
      }

    clean(obj:any) {
        for (const propName in obj) {
          if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || (obj[propName] && obj[propName].length==0)) {
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

    receiveStatus(data: Pagination) {
        this.pagination={...this.pagination, status: data.status, title: data.title, publisher: data.publisher, branchId: data.branchId};
        this.pagination.pageNo= 1;
        this.getAllJobs();        
    }

    receiveFilter(data: Pagination) {
        this.pagination={...this.pagination, status: data.status, title: data.title, publisher: data.publisher, branchId: data.branchId};
        this.pagination.pageNo= 1;
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

    onAllChecked(checked: boolean): void {
        this.allJobs.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.allJobs.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }

    deleteSelected() {
        const id=[];
          console.log(this.setOfCheckedId.forEach(x=>{
            id.push(x)
          }));
          this.apiService.sendRequest(requests.deleteJobs,'delete',{ids:id}).subscribe((res:any) => {
            this.setOfCheckedId.clear();
            this.checked= false;
            this.indeterminate= false;
            this.getAllJobs();
            this.message.create('success', `Job Deleted Successfully`)
          })
    }

    showDeleteConfirm(id?: number): void {
        this.modal.confirm({
          nzTitle: 'Delete',
          nzContent: '<b style="color: red;">Are you sure to delete this job?</b>',
          nzOkText: 'Yes',
        //   nzOkType: 'danger',
          nzOnOk: () => {
              if(id) {
                  this.deleteJobs(id);
              }
              else {
                  this.deleteSelected();
              }
            },
          nzCancelText: 'No',
          nzOnCancel: () => {
            this.setOfCheckedId.clear();
            this.checked= false;
            this.indeterminate= false;
            this.getAllJobs();
            }
        });
      }
}    