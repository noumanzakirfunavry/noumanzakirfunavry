import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
    templateUrl: './featuredNews.component.html',
    styleUrls: ['./featuredNews.component.scss']
})

export class FeaturedNewsComponent implements OnInit {
    pagination: Data = new Data()
    allFeaturedNews: any;
    allCategories: any;
    loading = true;

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
            if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || (obj[propName] && obj[propName].length==0)) {
                delete obj[propName];
            }
        }
        return obj
    }

    getAllFeaturedNews() {
        this.apiService.sendRequest(requests.getAllFeaturedNews, 'get').subscribe((res: any) => {
            this.allFeaturedNews = res.response.featuredNews;
            for(let i = 0; i < this.fNews.length; i++) {
                const feaNews= this.allFeaturedNews.find(x => x.position == this.fNews[i].position)
                if(feaNews) {
                    feaNews['section']=feaNews.position > 5 ? 'SECONDARY':'MAIN';
                    this.fNews[i] = feaNews;
                }
            }
            console.log("ALL-FEATURED-NEWS", this.allFeaturedNews);
            this.loading = false;
        }, err => {
            this.loading = false;
        })
    }

    changeCategory(data){
        console.log("CHANGE-CAT", data);
    }

    changedNews(updatedNews) {
        const news = this.fNews.findIndex(x => x.position == updatedNews.position);
        if (news > -1 && !this.findDuplicates()) {
            this.fNews[news] = updatedNews;
        } 
        else if(this.fNews.some(x=>!x.newsId)){
            const tempNews = updatedNews;
            setTimeout(() => {
                this.fNews[news] = tempNews;
                this.fNews[news]['newsId'] = null;
            }, 500);
            this.message.create('error', 'Please select unique news for each position')
        }
          else {
            const tempNews = updatedNews;
            setTimeout(() => {
                this.fNews[news] = tempNews;
                this.fNews[news]['newsId'] = null;
            }, 500);
            this.message.create('error', 'Please select unique news for each position')
        }
    }

    findDuplicates() {
        let isDuplicate=false;
        this.fNews.forEach(x=>{
            const duplicate=this.fNews.filter(y=>y.newsId==x.newsId && x.newsId && y.newsId);
            if(duplicate && duplicate.length > 1){
                isDuplicate= true
            }
        })
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
                const body = this.fNews.map(x=>{return {newsId: x.newsId, position: x.position, section: x.section}});
                this.apiService.sendRequest(requests.updateFeaturedNews, 'put', { news: body }).subscribe((res: any) => {
                    console.log("UPDATE-FEATURED-NEWS", res);
                    this.getAllFeaturedNews();
                    this.message.create('success', `Featured News Updated Successfully`);
                })
            }
    }

    drop(event: CdkDragDrop<string[] | any>) {
        moveItemInArray(this.fNews, event.previousIndex, event.currentIndex);
        for(let i = 0; i < this.fNews.length; i++) {
            this.fNews[i].position= i + 1;
            this.fNews[i].section = this.fNews[i].position > 5 ? 'SECONDARY':'MAIN'; 
        }
        console.log("POS", this.fNews);
      }

    cancel() {
        this.route.navigateByUrl('dashboard')
    }

}    