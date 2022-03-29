import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
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
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData: Array<any>;


    constructor(private apiService: ApiService, private message: NzMessageService ) {}

    ngOnInit(): void {
        this.getAllNews()
    }

    getAllNews() {
        this.apiService.sendRequest(requests.getAllNews, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allNews= res.response.news;
            this.newsCount= res.response.totalCount;
            console.log("ALL-NEWS", this.allNews);
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
    
    deleteNews(newsId: number) {
        this.apiService.sendRequest(requests.deleteNews, 'delete', {id:[newsId]}).subscribe((res:any) => {
            console.log("DELETE-NEWS", res);
            this.getAllNews();
            this.message.create('success', `News Deleted Successfully`)
        })
    }

    onPageIndexChange(pageNo: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, pageNo: pageNo})
        this.getAllNews();
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

    deleteSelected(){
      alert("are you sure you want to delete")
    }
}    