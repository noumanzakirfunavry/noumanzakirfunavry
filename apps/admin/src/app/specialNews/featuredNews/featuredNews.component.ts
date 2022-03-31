import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    loading = true;
    featuredNewsForm: FormGroup;

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
    allCategories: any;

    constructor(private apiService: ApiService, private fb: FormBuilder, private message: NzMessageService) { }


    ngOnInit(): void {
        this.getAllFeaturedNews();
        this.getAllCategories();
        this.featuredNewsForm = this.fb.group({
        });
        
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
            this.fNews=[...this.allFeaturedNews]
            console.log("ALL-FEATURED-NEWS", this.allFeaturedNews);
            this.loading = false;
        }, err => {
            this.loading = false;
        })
    }

    changedNews(updatedNews) {
        const news = this.fNews.findIndex(x => x.position == updatedNews.position);
        if (news > -1) {
            this.fNews[news] = updatedNews;
        }
    }

    updateFeaturedNews() {
        for (const i in this.featuredNewsForm.controls) {
            this.featuredNewsForm.controls[i].markAsDirty();
            this.featuredNewsForm.controls[i].updateValueAndValidity();
        }
        if (this.featuredNewsForm.valid) {
            this.fNews.forEach(news => {
                news.newsId = parseInt(news.newsId);
            })
            this.apiService.sendRequest(requests.updateFeaturedNews, 'put', { news: this.fNews }).subscribe((res: any) => {
                console.log("UPDATE-FEATURED-NEWS", res);
                this.message.create('success', `Featured News Updated Successfully`);
            })
        }
    }

}    