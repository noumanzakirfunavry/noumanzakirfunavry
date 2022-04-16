import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


@Component({
       selector: 'app-presenters',
    templateUrl: './presenters.component.html',
})

export class PresentersComponent implements OnInit {
    pagination: Pagination = new Pagination()
    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    allPresenters: any;
    presentersCount: any;
    loading= true;

    constructor( private apiService: ApiService, private message: NzMessageService, private modal: NzModalService ) {}

    ngOnInit(): void {
        this.getAllPresenters();
    }

    getAllPresenters() {
        this.apiService.sendRequest(requests.getAllPresenters, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allPresenters= res.response.presenters;
            this.presentersCount= res.response.totalCount;
            console.log("ALL-PRESENTERS", this.allPresenters);
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

    deletePresenters(presenterId: number) {
        this.apiService.sendRequest(requests.deletePresenters, 'delete', {id:[presenterId]}).subscribe((res:any) => {
            console.log("DELETE-PRESENTERS", res);
            this.getAllPresenters();
            this.message.create('success', `Presenter Deleted Successfully`)
        })
    }

    onPageIndexChange(pageNo: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, pageNo: pageNo})
        this.getAllPresenters();
    }

    onPageSizeChange(limit: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, limit: limit})
        this.getAllPresenters();
    }

    receiveStatus(data: Pagination) {
        this.pagination={...this.pagination, isActive: data.isActive, title: data.title, publisher: data.publisher};
        this.pagination.pageNo= 1;
        this.getAllPresenters();        
    }

    receiveFilter(data: Pagination) {
        this.pagination={...this.pagination, isActive: data.isActive, title: data.title, publisher: data.publisher};
        this.pagination.pageNo= 1;
        this.getAllPresenters();        
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
        this.allPresenters.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.allPresenters.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }

    deleteSelected() {
        const id=[];
          console.log(this.setOfCheckedId.forEach(x=>{
            id.push(x)
          }));
          this.apiService.sendRequest(requests.deletePresenters,'delete',{id:id}).subscribe((res:any) => {
            this.setOfCheckedId.clear();
            this.checked= false;
            this.indeterminate= false;
            this.getAllPresenters();
            this.message.create('success', `Presenter Deleted Successfully`)
          })
    }

    showDeleteConfirm(id?: number): void {
        this.modal.confirm({
          nzTitle: 'Delete',
          nzContent: '<b style="color: red;">Are you sure to delete this Presenter?</b>',
          nzOkText: 'Yes',
        //   nzOkType: 'danger',
          nzOnOk: () => {
              if(id) {
                  this.deletePresenters(id);
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
            this.getAllPresenters();
            }
        });
      }
}    