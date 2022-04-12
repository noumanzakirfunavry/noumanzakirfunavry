import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
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
    templateUrl: './exclusiveVideos.component.html'
})

export class ExclusiveVideosComponent implements OnInit{
    pagination: Data= new Data();
    loading= true;
    allCategories: any;
    allExclusiveVideos: any;

    exclusiveVideos: any[] = [
        {
            "position": 1,
            "title" : "asdsa",
            "description" : "asdasd",
            newsId: null
        },
        {
            "position": 2,
            "title" : "asdsa",
            "description" : "asdasd",
            newsId: null
        },
        {
            "position": 3,
            "title" : "asdsa",
            "description" : "asdasd",
            newsId: null
        },
        {
            "position": 4,
            "title" : "asdsa",
            "description" : "asdasd",
            newsId: null
        },
        {
            "position": 5,
            "title" : "asdsa",
            "description" : "asdasd",
            newsId: null
        }
    ];

    constructor (private apiService: ApiService,  private message: NzMessageService) {}

    ngOnInit(): void {
        this.getAllCategories();
        this.getAllExclusiveVideos();
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

    getAllExclusiveVideos() {
        this.apiService.sendRequest(requests.getAllExclusiveVideos, 'get', this.clean(Object.assign({ ...this.pagination }))).subscribe((res:any) => {
            this.allExclusiveVideos= res.response.exclusiveVideos;
            this.exclusiveVideos= [...this.allExclusiveVideos]
            console.log("ALL-EXCLUSIVE-VIDEOS", this.allExclusiveVideos);
            this.loading = false;
        }, err => {
            this.loading = false;
        })
    }

    changedNews(updatedNews) {
        const news = this.exclusiveVideos.findIndex(x => x.position == updatedNews.position);
        if (news > -1) {
            this.exclusiveVideos[news] = updatedNews;
        }
    }

    updateExclusiveVideos() {
        this.exclusiveVideos.forEach(news=>{
            news.newsId=parseInt(news.newsId);
        })
        this.apiService.sendRequest(requests.updateExclusiveVideos, 'put', { exclusiveVideos: this.exclusiveVideos }).subscribe((res:any) => {
            console.log("UPDATE-EXCLUSIVE-VIDEOS", res);
            this.getAllExclusiveVideos();
            this.message.create('success', `Exclusive Videos Updated Successfully`);
        })
    }


}    