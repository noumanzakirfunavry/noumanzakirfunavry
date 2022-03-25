import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Pagination } from 'src/app/common/models/pagination';
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';

export class Data extends Pagination {
    parentCategoryId?:Array<any>;
    publishers?:Array<any>;
    title?: string;
    includeNews?: any; 
    newsLImit?: any;
    categoryId?: number;


    constructor() {
        super();
        this.parentCategoryId= [];
        this.publishers= [];
        this.title= "";
        this.includeNews= "";
        this.newsLImit= "";
        this.categoryId= null;
    }
}


@Component({
    selector: 'news-table-row',
    templateUrl: './newsTableRow.component.html'
})

export class NewsTableRowComponent implements OnInit{
    pagination: Data = new Data()
    allCategories: any;
    allCategoryNews: any;
    @Input() news: any;

    constructor(private apiService: ApiService) {}


    ngOnInit(): void {
        this.getAllCategories();
    }

    getAllCategories() {
        this.apiService.sendRequest(requests.getAllCategories, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allCategories= res.response.categories;
            console.log("ALL-CATEGORIES", this.allCategories);
        })
    }
    
    onChangeNews(id){
        this.news=id;
        console.log("CAT-NEWS-ID", this.news);
    }

    getCategoryNews(catId?: any) {
        this.pagination.categoryId= catId ? catId : null;
        this.apiService.sendRequest(requests.getAllNews, 'get', {pageNo:1, limit:30, categoryId:parseInt(catId)}).subscribe((res:any) => {
            this.allCategoryNews= res.response.news;
            console.log("CATEGORY-NEWS", this.allCategoryNews);
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

}    