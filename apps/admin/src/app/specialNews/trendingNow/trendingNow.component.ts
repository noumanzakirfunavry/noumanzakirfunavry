import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    templateUrl: './trendingNow.component.html',
    styleUrls: ['./trendingNow.component.scss']
})

export class TrendingNowComponent implements OnInit{
    pagination: Data= new Data();
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


    constructor (private apiService: ApiService, private message: NzMessageService, private route: Router) {}

    ngOnInit(): void {
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
            for(let i = 0; i < this.tNews.length; i++) {
                const trNews= this.allTrendingNow.find(x => x.position == this.tNews[i].position)
                if(trNews) {
                    this.tNews[i] = trNews;
                }
            }
            console.log("ALL-TRENDING-NEWS", this.allTrendingNow);
            this.loading = false;
        }, err => {
            this.loading = false;
        })
    }

    changeCategory(data){
        console.log(data);
    }

    changedNews(updatedNews) {
        const news = this.tNews.findIndex(x => x.position == updatedNews.position);
        if (news > -1 && !this.findDuplicates()) {
            this.tNews[news] = updatedNews;
        }
        else if(this.tNews.some(x=>!x.newsId)){
            console.log('');
        }
        else {
            const tempNews = updatedNews;
            setTimeout(() => {
                this.tNews[news] = tempNews;
                this.tNews[news]['newsId'] = null;
            }, 500);
            this.message.create('error', 'Please select unique news for each position')
        }
    }

    findDuplicates() {
        const valueArr = this.tNews.map(function (item) { return item.newsId });
        const isDuplicate = valueArr.some(function (item, idx) {
            return valueArr.indexOf(item) != idx
        });
        console.log("DUPLICATE-NEWS", isDuplicate);
        return isDuplicate
    }

    updateTrendingNow() {
            this.tNews.forEach(news=>{
                news.newsId=parseInt(news.newsId);
            })
            if (this.tNews.some(x => !x.newsId)) {
                this.message.create('error', 'Add all Trending News for Trending Section')
            }
            else {
                const body = this.tNews.map(x=>{return {newsId: x.newsId, position: x.position, externalURL: x.externalURL}});
                this.apiService.sendRequest(requests.updateTrendingNews, 'put', { news: body }).subscribe((res:any) => {
                    console.log("UPDATE-TRENDING-NOW", res);
                    this.getAllTrendingNews();
                    this.message.create('success', `Trending Now News Updated Successfully`);
                })
            }
    }

    drop(event: CdkDragDrop<string[] | any>) {
        moveItemInArray(this.allTrendingNow, event.previousIndex, event.currentIndex);
        for(let i = 0; i < this.allTrendingNow.length; i++) {
            this.allTrendingNow[i].position= i + 1;
        }
        console.log("POS", this.allTrendingNow);
      }

    cancel() {
        this.route.navigateByUrl('dashboard')
    }

}    