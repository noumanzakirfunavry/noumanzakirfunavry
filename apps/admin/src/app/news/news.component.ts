import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


export class Data extends Pagination {
    publishers?: Array<any>;
    branchId?: Array<any>;
    title?: string;

    constructor() {
        super();
        this.publishers= [];
        this.branchId= [];
        this.title= "";
    }
}

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
})

export class NewsComponent implements OnInit {
    pagination: Data = new Data();
    allNews: any;
    newsCount: any;
    indeterminate = false;
    checked = false;
    loading = true;
    newsStatus: any;
    setOfCheckedId = new Set<number>();


    constructor(private apiService: ApiService, private message: NzMessageService, private modal: NzModalService ) {}

    ngOnInit(): void {
        this.getAllNews();
    }

    getAllNews() {
        this.apiService.sendRequest(requests.getAllNews, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allNews= res.response.news;
            this.newsCount= res.response.totalCount;
            console.log("ALL-NEWS", this.allNews);
            this.loading= false;
        },err => {
            this.loading = false;
            throw this.handleError(err);
          })
    }

    handleError(err: any) {
        if (err) {
          this.allNews = [];
          this.newsCount= 0;
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

    receiveStatus(data: Pagination) {
        this.pagination={...this.pagination, isActive: data.isActive, search: data.search, publishedBy: data.publishedBy, categoryId: data.categoryId, newsType: data.newsType, date: data.date};
        this.pagination.pageNo= 1;
        this.getAllNews();        
    }

    receiveFilter(data: Pagination) {
        this.pagination={...this.pagination, isActive: data.isActive, search: data.search, publishedBy: data.publishedBy, categoryId: data.categoryId, newsType: data.newsType, date: data.date};
        this.pagination.pageNo= 1;
        this.getAllNews();        
    }

    onPageIndexChange(pageNo: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, pageNo: pageNo})
        this.getAllNews();
    }

    getCategories(categories){
        let titles=''
        categories.forEach(x=>{
            titles+=x.title +', '
        })
        return titles
    }

    onPageSizeChange(limit: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, limit: limit})
        this.getAllNews();
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
        this.allNews.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.allNews.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }

    deleteSelected() {
    const id= [];
      console.log(this.setOfCheckedId.forEach(x=>{
        id.push(x)
      }));
      this.apiService.sendRequest(requests.deleteNews,'delete',{id:id}).subscribe((res:any) => {
        this.setOfCheckedId.clear();
        this.checked= false;
        this.indeterminate= false;
        this.getAllNews();
        this.message.create('success', `News Deleted Successfully`)
        })
    }
    
    deleteNews(newsId: number): void {
        this.apiService.sendRequest(requests.deleteNews, 'delete', {id:[newsId]}).subscribe((res:any) => {
            console.log("DELETE-NEWS", res);
            this.getAllNews();
            this.message.create('success', `News Deleted Successfully`)
        })
    }

    getNewsStatus(newsId?: number): void {
        this.apiService.sendRequest(requests.getNewsStatus + newsId, 'get').subscribe((res:any) => {
            this.newsStatus= res.response;
            this.showNewsStatusConfirm(newsId);
            console.log("NEWS-STATUS", this.newsStatus);
        })
    }

    showNewsStatusConfirm(id?: number): void {
            if(id && (this.newsStatus?.isBreakingNews || this.newsStatus?.isEditorChoice || this.newsStatus?.isExclusive || this.newsStatus?.isFeaturedNews || this.newsStatus?.isTrending)) {
                this.modal.confirm({
                    nzTitle: 'Confirm',
                    nzContent: '<b style="color: red;">This news is used in Special News. You still want to delete this News?</b>',
                    nzOkText: 'Yes',
                    nzOnOk: () => {
                        if(id) {
                          this.deleteNews(id);
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
                      this.getAllNews();
                      }
                  });
              }
              else {
                  this.showDeleteConfirm(id);
              }        
      }

    showDeleteConfirm(id?: number): void {
        this.modal.confirm({
          nzTitle: 'Delete',
          nzContent: '<b style="color: red;">Are you sure to delete this news?</b>',
          nzOkText: 'Yes',
          nzOnOk: () => {
              if(id) {
                  this.deleteNews(id);
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
            this.getAllNews();
            }
        });
      }
}    