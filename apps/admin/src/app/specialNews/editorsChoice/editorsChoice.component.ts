import { Component, OnInit } from '@angular/core';
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
    templateUrl: './editorsChoice.component.html'
})

export class EditorsChoiceComponent implements OnInit{
    pagination: Data= new Data();
    loading= true;
    allCategories: any;
    allEditorsChoice: any;

    editorsChoice: any[] = [
        {
            "position": 1,
            newsId: null
        },
        {
            "position": 2,
            newsId: null
        },
        {
            "position": 3,
            newsId: null
        },
        {
            "position": 4,
            newsId: null
        },
        {
            "position": 5,
            newsId: null
        }
    ];


    constructor (private apiService: ApiService,  private message: NzMessageService) {}

    ngOnInit(): void {
        this.getAllCategories();
        if(this.editorsChoice) {
            this.getAllEditorsChoiceNews();
        }
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

    getAllEditorsChoiceNews() {
        this.apiService.sendRequest(requests.getAllEditorsChoiceNews, 'get').subscribe((res:any) => {
            this.allEditorsChoice= res.response.editorsChoiceNews;
            this.editorsChoice=[...this.allEditorsChoice]
            console.log("ALL-EDITORS-CHOICE", this.allEditorsChoice);
            this.loading= false;
        }, err => {
            this.loading = false;
        })
    }

    changedNews(updatedNews) {
        const news = this.editorsChoice.findIndex(x => x.position == updatedNews.position);
        if (news > -1) {
            this.editorsChoice[news] = updatedNews;
        }
    }

    updateEditorsChoiceNews() {
            this.editorsChoice.forEach(news=>{
                news.newsId=parseInt(news.newsId);
            })
            this.apiService.sendRequest(requests.updateEditorsChoiceNews, 'put', { news: this.editorsChoice }).subscribe((res:any) => {
                console.log("UPDATE-EDITORS-CHOICE", res);
                this.getAllEditorsChoiceNews();
                this.message.create('success', `Editor's Choice News Updated Successfully`);
            })
    }

}    