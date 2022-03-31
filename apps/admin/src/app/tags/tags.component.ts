import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';

export class Data extends Pagination {
    publishers?: Array<any>;

    constructor() {
        super();
        this.publishers= [];
    }
}


@Component({
       selector: 'app-tags',
    templateUrl: './tags.component.html',
})

export class TagsComponent implements OnInit {
    pagination: Data = new Data();
    allTags: any;
    tagsCount: any;
    indeterminate = false;
    checked = false;
    loading = true;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData = [];

    
    constructor(private apiService: ApiService, private message: NzMessageService, private modal: NzModalService ) {}

    ngOnInit() {
        this.getAllTags();
    }

    getAllTags() {
        this.apiService.sendRequest(requests.getAllTags, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allTags= res.response.tags;
            this.tagsCount= res.response.totalCount;
            console.log("ALL-TAGS", this.allTags);
            this.loading= false;
        },err => {
            this.loading = false;
            throw this.handleError(err)
          })
    }

    handleError(err: any) {
        if (err) {
          this.allTags = [];
          this.tagsCount= 0;
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

    deleteTags(tagId: any) {
        this.apiService.sendRequest(requests.deleteTags, 'delete', {ids:[tagId]}).subscribe((res:any) => {
            console.log("DELETE-TAG", res);
            this.getAllTags();
            this.message.create('success', `Tag Deleted Successfully`)
        })
    }

    receiveStatus(data: Pagination) {
        this.pagination={...this.pagination, status: data.status, title: data.title, publishers: data.publishers};
        this.pagination.pageNo= 1;
        this.getAllTags();        
    }

    receiveFilter(data: Pagination) {
        this.pagination={...this.pagination, status: data.status, title: data.title, publishers: data.publishers};
        this.pagination.pageNo= 1;
        this.getAllTags();        
    }

    onPageIndexChange(pageNo: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, pageNo: pageNo})
        this.getAllTags();
    }

    onPageSizeChange(limit: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, limit: limit})
        this.getAllTags();
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
        this.allTags.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.allTags.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }

    deleteSelected() {
        const id=[];
          console.log(this.setOfCheckedId.forEach(x=>{
            id.push(x)
          }));
          this.apiService.sendRequest(requests.deleteTags,'delete',{ids:id}).subscribe((res:any) => {
            this.setOfCheckedId.clear();
            this.checked= false;
            this.indeterminate= false;
            this.getAllTags();
          })
    }

    showDeleteConfirm(id?: number): void {
        this.modal.confirm({
          nzTitle: 'Delete',
          nzContent: '<b style="color: red;">Are you sure to delete this tag?</b>',
          nzOkText: 'Yes',
        //   nzOkType: 'danger',
          nzOnOk: () => {
              if(id) {
                  this.deleteTags(id);
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
            this.getAllTags();
            }
        });
      }
    
}    