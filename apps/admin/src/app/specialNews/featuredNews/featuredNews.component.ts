import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';


@Component({
    templateUrl: './featuredNews.component.html'
})

export class FeaturedNewsComponent implements OnInit {
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

    constructor(private apiService: ApiService, private fb: FormBuilder) { }


    ngOnInit(): void {
        this.featuredNewsForm = this.fb.group({
        });
        this.getAllFeaturedNews();
    }

    getAllFeaturedNews() {
        this.apiService.sendRequest(requests.getAllFeaturedNews, 'get').subscribe((res: any) => {
            this.allFeaturedNews = res.response.featuredNews;
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
            this.fNews.forEach(news=>{
                news.newsId=parseInt(news.newsId);
            })
            this.apiService.sendRequest(requests.updateFeaturedNews, 'put', { news: [this.fNews] }).subscribe((res: any) => {
                console.log("UPDATE-FEATURED-NEWS", res);
            })
        }
    }

}    