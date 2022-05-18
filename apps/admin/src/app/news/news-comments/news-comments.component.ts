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
    commentListData = [];
    totalCount=0;
    constructor(private apiService:ApiService) { }

    ngOnInit() {
        this.fetchComments();
     }

    private fetchComments() {
        this.apiService.sendRequest(requests.getNewsComments, 'get', { entityType: 'NEWS', pageNo: 1, limit: 10, entityId: this.newsId }).subscribe((res:any) => {
            console.log("COMMENTS", res);
            this.commentListData=res.response.comments;
            this.totalCount=res.response.totalCount;
        });
    }

    getCaptcha(e: MouseEvent): void {
        e.preventDefault();
    }

    addComment(){
        this.apiService.sendRequest(requests.addNewsComments,'post',{
            "entityType": "NEWS",
        
            "entityId": this.newsId,
        
            "comment": "Added Video"
        }).subscribe(res=>{
            console.log("ADDED COMMENT",res);
            this.fetchComments();
        })
    }
}