import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Pagination } from '../../common/models/pagination';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';

export class Data extends Pagination {
    parentCategoryId?: Array<any>;
    publishers?: Array<any>;
    title?: string;
    includeNews?: any;
    newsLImit?: any;
    categoryId?: number;


    constructor() {
        super();
        this.parentCategoryId = [];
        this.publishers = [];
        this.title = "";
        this.includeNews = "";
        this.newsLImit = "";
        this.categoryId = null;
    }
}

@Component({
    templateUrl: './featuredNews.component.html'
})

export class FeaturedNewsComponent implements OnInit {
    pagination: Data = new Data()
    allFeaturedNews: any;
    allCategories: any;
    loading = true;
    fNewsId: any;

    fNews: any[] = [
        {
            "position": 1,
            "section": "MAIN",
            newsId: null
        },
        {
            "position": 2,
            "section": "MAIN",
            newsId: null
        },
        {
            "position": 3,
            "section": "MAIN",
            newsId: null
        },
        {
            "position": 4,
            "section": "MAIN",
            newsId: null
        },
        {
            "position": 5,
            "section": "MAIN",
            newsId: null
        },
        {
            "position": 6,
            "section": "SECONDARY",
            newsId: null
        },
        {
            "position": 7,
            "section": "SECONDARY",
            newsId: null
        },
        {
            "position": 8,
            "section": "SECONDARY",
            newsId: null
        }
    ];


    constructor(private apiService: ApiService, private message: NzMessageService, private route: Router) { }


    ngOnInit(): void {
        this.getAllCategories();
        this.getAllFeaturedNews();
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

    getAllFeaturedNews() {
        this.apiService.sendRequest(requests.getAllFeaturedNews, 'get').subscribe((res: any) => {
            this.allFeaturedNews = res.response.featuredNews;
            this.fNews = this.allFeaturedNews && this.allFeaturedNews.length > 0 ? this.allFeaturedNews : this.fNews;
            // this.fNews.forEach(news => {
            //     news.newsId = this.allFeaturedNews.find(x=>x.position==news.position)?.newsId
            // })
            console.log("ALL-FEATURED-NEWS", this.allFeaturedNews);
            this.loading = false;
        }, err => {
            this.loading = false;
        })
    }

    changeCategory(data){
        console.log(data);
    }

    changedNews(updatedNews) {
        const news = this.fNews.findIndex(x => x.position == updatedNews.position);
        if (news > -1 && !this.findDuplicates()) {
            this.fNews[news] = updatedNews;
        } 
        else if(this.fNews.some(x=>!x.newsId)){
            
        }
          else {
            // this.fNews[news] = null;
            const tempNews = updatedNews;
            setTimeout(() => {
                this.fNews[news] = tempNews;
                this.fNews[news]['newsId'] = null;
            }, 500);
            this.message.create('error', 'Please select unique news for each position')
        }
    }

    findDuplicates() {
        const valueArr = this.fNews.map(function (item) { return item.newsId });
        const isDuplicate = valueArr.some(function (item, idx) {
            return valueArr.indexOf(item) != idx
        });
        console.log("DUPLICATE-NEWS", isDuplicate);
        return isDuplicate
    }

    updateFeaturedNews() {
        this.fNews.forEach(news => {
            news.newsId = parseInt(news.newsId);
        })
        if (this.fNews.some(x => !x.newsId)) {
            this.message.create('error', 'Add all Featured News for Featured Section')
        } 
        else {
            this.apiService.sendRequest(requests.updateFeaturedNews, 'put', { news: this.fNews }).subscribe((res: any) => {
                console.log("UPDATE-FEATURED-NEWS", res);
                this.getAllFeaturedNews();
                this.message.create('success', `Featured News Updated Successfully`);
            })
        }

    }

    cancel() {
        this.route.navigateByUrl('dashboard')
    }

}    