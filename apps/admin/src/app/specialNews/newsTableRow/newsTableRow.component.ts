import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    selector: 'news-table-row',
    templateUrl: './newsTableRow.component.html',
    styleUrls: [
        './newsTableRow.component.scss',        
        // `
        //   /* nz-select {
        //     overflow: hidden;
        //     white-space: nowrap;
        //     text-overflow: ellipsis;
        //   } */
        // `
    ]
})

export class NewsTableRowComponent implements OnInit, AfterContentInit {
    @Input() allCategories: any;
    @Input() news: any = { newId: null };
    @Input() allNews: any = [];
    @Output() onNewsSelection: EventEmitter<any> = new EventEmitter();
    @Output() onCatSelection: EventEmitter<any> = new EventEmitter();

    pagination: Data = new Data()
    allCategoryNews: any = [];
    selectedCat: any

    constructor(private apiService: ApiService) { }


    ngOnInit(): void {
        // this.getAllCategories();

    }
    ngAfterContentInit(): void {
        this.allCategoryNews.push(this.news.news)
    }

    getAllCategories() {
        this.apiService.sendRequest(requests.getAllCategories, 'get', this.clean(Object.assign({ ...this.pagination }))).subscribe((res: any) => {
            this.allCategories = res.response.categories;
            console.log("ALL-CATEGORIES", this.allCategories);
        })
    }

    onChangeNews(id) {
        this.news.newsId = id;
        this.onNewsSelection.emit(this.news);
        console.log("CAT-NEWS-ID", this.news);
    }

    getNews(news){
        console.log("gettting call");
     this.apiService.sendRequest(requests.getAllNews,'get', { pageNo: 1, limit: 30, isActive: true,...(this.pagination.categoryId ? {categoryId: this.pagination.categoryId}:null),search:news}).subscribe((res:any)=>{
         this.allCategoryNews=res.response.news;
     })
    }

    getCategoryNews(catId?: any) {
        // console.log("SEL-CAT", this.selectedCat)
        this.pagination.categoryId = catId ? catId : null;
        this.apiService.sendRequest(requests.getAllNews, 'get', { pageNo: 1, limit: 30, isActive: true, ...(catId ? {categoryId: parseInt(catId)}:null) }).subscribe((res: any) => {
            this.allCategoryNews = res.response.news;
            // this.allCategoryNews=this.allCategoryNews && this.allCategoryNews.length>0 ? this.allCategoryNews.filter(x => this.allNews.some(y => y.newsId!= x.id) ):[];
            // const uniqueIds = this.allCategoryNews.map(x => x.id).filter((v, i, s) => s.indexOf(v) === i)
            this.news.newsId = null
            this.onCatSelection.emit(this.news);
            console.log("CATEGORY-NEWS", this.allCategoryNews);
            // console.log("CATEGORY-NEWS-UNIQUE-IDS", uniqueIds);
            // return this.allCategoryNews && this.allCategoryNews.filter((x: any) => x.id != this.news.newsId)
            return this.allCategoryNews && this.allCategoryNews.length>0 ? this.allCategoryNews.filter(x => this.allNews.some(y => y.newsId!= x.id) ):[]
        })
    }

    getUnselectedNews() {
        return this.allCategoryNews && this.allCategoryNews.length>0 ? this.allCategoryNews.filter(x => this.allNews.some(y => y.newsId) != x.newsId):[];
    }

    clean(obj: any) {
        for (const propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || (obj[propName] && obj[propName].length == 0)) {
                delete obj[propName];
            }
        }
        return obj
    }

}    