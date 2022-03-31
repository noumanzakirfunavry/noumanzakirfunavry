
import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


export class Data extends Pagination {
    publishers: Array<any>;
    title: string;

    constructor () {
        super();
        this.publishers= [];
        this.title= "";
    }
}

@Component({
       selector: 'app-breakingNews',
    templateUrl: './breakingnews.component.html',
})

export class BreakingNewsComponent implements OnInit{
    pagination: Data = new Data()
    allBreakingNews: any;
    breakingNewsCount: any;
    loading= true;
    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData: Array<any>;

    constructor( private apiService: ApiService, private message: NzMessageService ) {}

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

      deleteBreakingNews(breakingNewsId: number) {
          this.apiService.sendRequest(requests.deleteBreakingNews, 'delete', {ids:[breakingNewsId]}).subscribe((res:any) => {
              console.log("DEL-BREAKING-NEWS", res);
              this.getAllBreakingNews();
              this.message.create('success', `Breaking News Deleted Successfully`);
          })
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

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }
}    