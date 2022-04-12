
import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


@Component({
       selector: 'app-breakingNews',
    templateUrl: './breakingnews.component.html',
})

export class BreakingNewsComponent implements OnInit{
    pagination: Pagination = new Pagination()
    allBreakingNews: any;
    breakingNewsCount: any;
    loading= true;
    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData: Array<any>;

    constructor( private apiService: ApiService, private message: NzMessageService, private modal: NzModalService ) {}

    ngOnInit(): void {
        this.getAllBreakingNews();
    }   

    getAllBreakingNews() {
        this.apiService.sendRequest(requests.getAllBreakingNews, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allBreakingNews= res.response.breakingNews;
            this.breakingNewsCount= res.response.totalCount;
            console.log("ALL-BREAKING-NEWS", this.allBreakingNews);
            this.loading= false;
        },err => {
            this.loading = false;
            throw this.handleError(err);
          })
    }

    handleError(err: any) {
        if (err) {
          this.allBreakingNews = [];
          this.breakingNewsCount= 0;
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

    deleteBreakingNews(breakingNewsId: number) {
          this.apiService.sendRequest(requests.deleteBreakingNews, 'delete', {ids:[breakingNewsId]}).subscribe((res:any) => {
              console.log("DEL-BREAKING-NEWS", res);
              this.setOfCheckedId.clear();
              this.checked= false;
              this.indeterminate= false;
              this.getAllBreakingNews();
              this.message.create('success', `Breaking News Deleted Successfully`);
          })
      }

    receiveStatus(data: Pagination) {
        this.pagination={...this.pagination, status: data.status, title: data.title, publishers: data.publishers};
        this.pagination.pageNo= 1;
        this.getAllBreakingNews();        
    }

    receiveFilter(data: Pagination) {
        this.pagination={...this.pagination, status: data.status, title: data.title, publishers: data.publishers};
        this.pagination.pageNo= 1;
        this.getAllBreakingNews();        
    }

    onPageIndexChange(pageNo: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, pageNo: pageNo})
        this.getAllBreakingNews();
    }

    onPageSizeChange(limit: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, limit: limit})
        this.getAllBreakingNews();
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
        this.allBreakingNews.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.allBreakingNews.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }

    deleteSelected() {
        const id=[];
          console.log(this.setOfCheckedId.forEach(x=>{
            id.push(x)
          }));
          this.apiService.sendRequest(requests.deleteBreakingNews,'delete',{ids:id}).subscribe((res:any) => {
            this.setOfCheckedId.clear();
            this.checked= false;
            this.indeterminate= false;
            this.getAllBreakingNews();
            this.message.create('success', `Breaking News Deleted Successfully`);
          })
    }

    showDeleteConfirm(id?: number): void {
        this.modal.confirm({
          nzTitle: 'Delete',
          nzContent: '<b style="color: red;">Are you sure to delete this breaking news?</b>',
          nzOkText: 'Yes',
        //   nzOkType: 'danger',
          nzOnOk: () => {
              if(id) {
                  this.deleteBreakingNews(id);
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
            this.getAllBreakingNews();
            }
        });
      }
}    