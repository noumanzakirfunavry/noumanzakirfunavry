import { AfterContentInit, Component,EventEmitter,Input, OnInit, Output} from '@angular/core';
import { Pagination } from '../../common/models/pagination';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';

export class Data extends Pagination {
    parentCategoryId?:Array<any>;
    publishers?:Array<any>; 
    title?: string;
    includeNews?: any; 
    newsLImit?: any;
    categoryId?: number;


    constructor() {
        super();
        this.parentCategoryId= [];
        this.publishers= [];
        this.title= "";
        this.includeNews= "";
        this.newsLImit= "";
        this.categoryId= null;
    }
}


@Component({
    selector: 'news-table-row',
    templateUrl: './newsTableRow.component.html',
    styles: [
        `
          /* nz-select {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          } */
        `
      ]
})

export class NewsTableRowComponent implements OnInit, AfterContentInit{
    @Input() allCategories: any;
    @Input() news: any = {newId:null};
    @Output() onNewsSelection:EventEmitter<any>=new EventEmitter();
    pagination: Data = new Data()
    allCategoryNews: any = [];
    selectedCat: any

    constructor(private apiService: ApiService) {}


    ngOnInit(): void {
        // this.getAllCategories();
      
    }
    ngAfterContentInit(): void {
        this.allCategoryNews.push(this.news.news)
    }

    getAllCategories() {
        this.apiService.sendRequest(requests.getAllCategories, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allCategories= res.response.categories;
            console.log("ALL-CATEGORIES", this.allCategories);
        })
    }
    
    onChangeNews(id){
        this.news.newsId=id;
        this.onNewsSelection.emit(this.news);
        console.log("CAT-NEWS-ID", this.news);
    }

    getCategoryNews(catId?: any) {
        // console.log("SEL-CAT", this.selectedCat)
        this.pagination.categoryId= catId ? catId : null;
        this.apiService.sendRequest(requests.getAllNews, 'get', {pageNo:1, limit:30, categoryId:parseInt(catId)}).subscribe((res:any) => {
            this.allCategoryNews= res.response.news;
            this.news.newsId = null
            this.onNewsSelection.emit(this.news);

            console.log("CATEGORY-NEWS", this.allCategoryNews);
        //     const dataToShow: any = [];
        //     this.allCategories.forEach((element: any) => {
        //     const findId: any = this.allCategoryNews.find((x: any) => x.id == element.id);
        //     console.log("FIND-ID", findId);
        //     if (findId == -1) {
        //         dataToShow.push(element);
        //     }
        // });
        //     return dataToShow;
        })
    }

    // getOtherCategoryNews() {
    //     const dataToShow: any = [];
    //     this.allCategories.forEach((element: any) => {
    //     const findIndex: any = this.allCategoryNews.findIndex((x: any) => x.id == element.id);
    //     if (findIndex == -1) {
    //         dataToShow.push(element);
    //     }
    // });
    //     return dataToShow;
    // }

    clean(obj:any) {
        for (const propName in obj) {
          if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName] === []) {
            delete obj[propName];
          }
        }
        return obj
      }

}    