import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/common/models/pagination';
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';

export class Data extends Pagination {
    parentCategoryId?:Array<any>;
    publishers?:Array<any>;
    title?: string;
    includeNews?: any; 
    newsLImit?: any;

    constructor() {
        super();
        this.parentCategoryId= [];
        this.publishers= [];
        this.title= "";
        this.includeNews= "";
        this.newsLImit= "";
    }
}


@Component({
    templateUrl: './trendingNow.component.html'
})

export class TrendingNowComponent implements OnInit{
    pagination: Data= new Data();
    allCategories: any;


    constructor (private apiService: ApiService) {}

    ngOnInit(): void {
        this.getAllTrendingNews();
        this.getAllCategories();
    }

    getAllTrendingNews() {
        this.apiService.sendRequest(requests.getAllTrendingNews, 'get').subscribe((res:any) => {
            console.log("ALL-TRENDING-NEWS", res);
        })
    }

    getAllCategories() {
        this.apiService.sendRequest(requests.getAllCategories, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allCategories= res.response.categories;
            console.log("ALL-CATEGORIES", this.allCategories);
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