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
    templateUrl: './editorsChoice.component.html',
    styleUrls: ['./editorsChoice.component.scss']
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


    constructor (private apiService: ApiService,  private message: NzMessageService, private route: Router) {}

    ngOnInit(): void {
        this.getAllCategories();
        this.getAllEditorsChoiceNews();
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

    getAllEditorsChoiceNews() {
        this.apiService.sendRequest(requests.getAllEditorsChoiceNews, 'get').subscribe((res:any) => {
            this.allEditorsChoice= res.response.editorsChoiceNews;
            for(let i = 0; i < this.editorsChoice.length; i++) {
                const edNews= this.allEditorsChoice.find(x => x.position == this.editorsChoice[i].position)
                if(edNews) {
                    this.editorsChoice[i] = edNews;
                }
            }
            console.log("ALL-EDITORS-CHOICE", this.allEditorsChoice);
            this.loading = false;
        }, err => {
            this.loading = false;
        })
    }

    changeCategory(data) {
        console.log("CHANGE-CAT", data);
    }

    findDuplicates() {
        let isDuplicate=false;
        this.editorsChoice.forEach(x=>{
            const duplicate=this.editorsChoice.filter(y=>y.newsId==x.newsId && x.newsId && y.newsId);
            if(duplicate && duplicate.length > 1){
                isDuplicate= true
            }
        })
        console.log("DUPLICATE-NEWS", isDuplicate);
        return isDuplicate
    }

    changedNews(updatedNews) {
        const news = this.editorsChoice.findIndex(x => x.position == updatedNews.position);
        if (news > -1 && !this.findDuplicates()) {
            this.editorsChoice[news] = updatedNews;
        }
        else if(this.editorsChoice.some(x=>!x.newsId)){
            const tempNews = updatedNews;
            setTimeout(() => {
                this.editorsChoice[news] = tempNews;
                this.editorsChoice[news]['newsId'] = null;
            }, 500);
            this.message.create('error', 'Please select unique news for each position')
        }
        else {
            const tempNews = updatedNews;
            setTimeout(() => {
                this.editorsChoice[news] = tempNews;
                this.editorsChoice[news]['newsId'] = null;
            }, 500);
            this.message.create('error', 'Please select unique news for each position')
        }
    }

    updateEditorsChoiceNews() {
            this.editorsChoice.forEach(news=>{
                news.newsId = parseInt(news.newsId);
            })
            if (this.editorsChoice.some(x => !x.newsId)) {
                this.message.create('error', 'Add all Editors Choice News for Editors Choice Section')
            } 
            else {
                const body = this.editorsChoice.map(x=>{return {newsId:x.newsId,position: x.position}});
                this.apiService.sendRequest(requests.updateEditorsChoiceNews, 'put', { news: body }).subscribe((res:any) => {
                    console.log("UPDATE-EDITORS-CHOICE", res);
                    this.getAllEditorsChoiceNews();
                    this.message.create('success', `Editor's Choice News Updated Successfully`);
                })
            }
    }

    drop(event: CdkDragDrop<string[] | any>) {
        moveItemInArray(this.editorsChoice, event.previousIndex, event.currentIndex);
        for(let i = 0; i < this.editorsChoice.length; i++) {
            this.editorsChoice[i].position= i + 1;
        }
        console.log("POS", this.editorsChoice);
      }

    cancel() {
        this.route.navigateByUrl('dashboard')
    }

}    