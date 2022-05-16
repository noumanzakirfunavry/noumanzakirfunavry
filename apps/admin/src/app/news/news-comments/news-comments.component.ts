import { Component, Input, OnInit } from '@angular/core';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';
import { CommentListData } from '../addNews/mockComments';

@Component({
    selector: 'news-comments',
    templateUrl: 'news-comments.component.html',
    styleUrls:['news-comments.component.scss']
})

export class NewsCommentsComponent implements OnInit {
    @Input() newsId:string | any;
    commentListData = CommentListData
    constructor(private apiService:ApiService) { }

    ngOnInit() {
        this.apiService.sendRequest(requests.getNewsComments,'get',)
     }

    getCaptcha(e: MouseEvent): void {
        e.preventDefault();
    }
}