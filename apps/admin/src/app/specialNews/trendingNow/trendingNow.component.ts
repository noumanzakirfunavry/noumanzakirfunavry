import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Pagination } from '../../common/models/pagination';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';

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
    trendingNowForm: FormGroup;
    loading= true;
    allCategories: any;
    allTrendingNow: any;

    tNews: any[] = [
        {
            "position": 1,
            "externalURL": "http://www.google.com",
            newsId: null
        },
        {
            "position": 2,
            "externalURL": "http://www.google.com",
            newsId: null
        },
        {
            "position": 3,
            "externalURL": "http://www.google.com",
            newsId: null
        },
        {
            "position": 4,
            "externalURL": "http://www.google.com",
            newsId: null
        },
        {
            "position": 5,
            "externalURL": "http://www.google.com",
            newsId: null
        }
    ];


    constructor (private apiService: ApiService, private fb: FormBuilder, private message: NzMessageService) {}

    ngOnInit(): void {
        this.trendingNowForm = this.fb.group({
        });
        this.getAllCategories();
        this.getAllTrendingNews();
    }

    getAllCategories() {
        this.apiService.sendRequest(requests.getAllCategories, 'get', this.clean(Object.assign({ ...this.pagination }))).subscribe((res: any) => {
            this.allCategories = res.response.categories;
            console.log("ALL-CATEGORIES", this.allCategories);
        })
    }

    clean(obj: any) {
        for (const propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName] === []) {
                delete obj[propName];
            }
        }
        return obj
    }

    getAllTrendingNews() {
        this.apiService.sendRequest(requests.getAllTrendingNews, 'get').subscribe((res:any) => {
            this.allTrendingNow= res.response.trendingNews;
            this.tNews= [...this.allTrendingNow]
            console.log("ALL-TRENDING-NEWS", this.allTrendingNow);
            this.loading = false;
        }, err => {
            this.loading = false;
        })
    }

    changedNews(updatedNews) {
        const news = this.tNews.findIndex(x => x.position == updatedNews.position);
        if (news > -1) {
            this.tNews[news] = updatedNews;
        }
    }

    updateTrendingNow() {
        for (const i in this.trendingNowForm.controls) {
            this.trendingNowForm.controls[i].markAsDirty();
            this.trendingNowForm.controls[i].updateValueAndValidity();
        }
        if(this.trendingNowForm.valid) {
            this.tNews.forEach(news=>{
                news.newsId=parseInt(news.newsId);
            })
            this.apiService.sendRequest(requests.updateTrendingNews, 'put', { news: this.tNews }).subscribe((res:any) => {
                console.log("UPDATE-TRENDING-NOW", res);
                this.message.create('success', `Trending Now News Updated Successfully`);
            })
        }
    }

}    