import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    templateUrl: './editorsChoice.component.html'
})

export class EditorsChoiceComponent{
    pagination: Data= new Data();
    editorsChoiceForm: FormGroup;
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


    constructor (private apiService: ApiService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.editorsChoiceForm = this.fb.group({
        });
        this.getAllEditorsChoiceNews();
    }

    getAllEditorsChoiceNews() {
        this.apiService.sendRequest(requests.getAllEditorsChoiceNews, 'get').subscribe((res:any) => {
            this.allEditorsChoice= res
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
        for (const i in this.editorsChoiceForm.controls) {
            this.editorsChoiceForm.controls[i].markAsDirty();
            this.editorsChoiceForm.controls[i].updateValueAndValidity();
        }
        if(this.editorsChoiceForm.valid) {
            this.editorsChoice.forEach(news=>{
                news.newsId=parseInt(news.newsId);
            })
            this.apiService.sendRequest(requests.updateEditorsChoiceNews, 'put', {news:[this.editorsChoice]}).subscribe((res:any) => {
                console.log("UPDATE-EDITORS-CHOICE", res);
            })
        }
    }

}    