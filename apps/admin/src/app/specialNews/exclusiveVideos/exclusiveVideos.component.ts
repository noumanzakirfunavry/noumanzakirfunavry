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
    templateUrl: './exclusiveVideos.component.html',
    styleUrls: ['./exclusiveVideos.component.scss']
})

export class ExclusiveVideosComponent implements OnInit{
    pagination: Data= new Data();
    loading= true;
    allCategories: any;
    allExclusiveVideos: any;

    exclusiveVideos: any[] = [
        {
            "position": 1,
            "title" : "title1",
            "description" : "description1",
            newsId: null
        },
        {
            "position": 2,
            "title" : "title2",
            "description" : "description2",
            newsId: null
        },
        {
            "position": 3,
            "title" : "title3",
            "description" : "description3",
            newsId: null
        },
        {
            "position": 4,
            "title" : "title4",
            "description" : "description4",
            newsId: null
        },
        {
            "position": 5,
            "title" : "title5",
            "description" : "description5",
            newsId: null
        }
    ];

    constructor (private apiService: ApiService,  private message: NzMessageService, private route: Router) {}

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
            if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || (obj[propName] && obj[propName].length==0)) {
                delete obj[propName];
            }
        }
        return obj
    }

    getAllExclusiveVideos() {
        this.apiService.sendRequest(requests.getAllExclusiveVideos, 'get').subscribe((res:any) => {
            this.allExclusiveVideos= res.response.exclusiveVideos;
            for(let i = 0; i < this.exclusiveVideos.length; i++) {
                const evNews= this.allExclusiveVideos.find(x => x.position == this.exclusiveVideos[i].position)
                if(evNews) {
                    this.exclusiveVideos[i] = evNews;
                }
            }
            console.log("ALL-EXCLUSIVE-VIDEOS", this.allExclusiveVideos);
            this.loading = false;
        }, err => {
            this.loading = false;
        })
    }

    changeCategory(data){
        console.log(data);
    }

    changedNews(updatedNews) {
        const news = this.exclusiveVideos.findIndex(x => x.position == updatedNews.position);
        if (news > -1 && !this.findDuplicates()) {
            this.exclusiveVideos[news] = updatedNews;
        }
        else if(this.exclusiveVideos.some(x=>!x.newsId)){
            console.log('');
            const tempNews = updatedNews;
            setTimeout(() => {
                this.exclusiveVideos[news] = tempNews;
                this.exclusiveVideos[news]['newsId'] = null;
            }, 500);
            this.message.create('error', 'Please select unique news for each position')
        }
        else {
            const tempNews = updatedNews;
            setTimeout(() => {
                this.exclusiveVideos[news] = tempNews;
                this.exclusiveVideos[news]['newsId'] = null;
            }, 500);
            this.message.create('error', 'Please select unique news for each position')
        }
    }

    findDuplicates() {
        let isDuplicate=false;
        this.exclusiveVideos.forEach(x=>{
            const duplicate=this.exclusiveVideos.filter(y=>y.newsId==x.newsId && x.newsId && y.newsId);
            if(duplicate && duplicate.length > 1){
                isDuplicate= true
            }
        })
        console.log("DUPLICATE-NEWS", isDuplicate);
        return isDuplicate
    }

    updateExclusiveVideos() {
        this.exclusiveVideos.forEach(news=>{
            news.newsId=parseInt(news.newsId);
        })
        if (this.exclusiveVideos.some(x => !x.newsId)) {
            this.message.create('error', 'Add all Exclusive Video News for Exclusive Video Section')
        }
        else {
            const body = this.exclusiveVideos.map(x=>{return {newsId: x.newsId, position: x.position, title: x.title, description: x.description}});
            this.apiService.sendRequest(requests.updateExclusiveVideos, 'put', { exclusiveVideos: body }).subscribe((res:any) => {
                console.log("UPDATE-EXCLUSIVE-VIDEOS", res);
                this.getAllExclusiveVideos();
                this.message.create('success', `Exclusive Videos Updated Successfully`);
            })
        }
    }

    drop(event: CdkDragDrop<string[] | any>) {
        moveItemInArray(this.exclusiveVideos, event.previousIndex, event.currentIndex);
        for(let i = 0; i < this.exclusiveVideos.length; i++) {
            this.exclusiveVideos[i].position= i + 1;
        }
        console.log("POS", this.exclusiveVideos);
    }

    cancel() {
        this.route.navigateByUrl('dashboard')
    }

}    