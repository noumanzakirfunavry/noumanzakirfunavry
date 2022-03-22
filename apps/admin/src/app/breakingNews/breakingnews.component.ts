
import { Component, OnInit } from '@angular/core'
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';
import { ThemeConstantService } from '../shared/services/theme-constant.service';


export class Data extends Pagination {
    publishers: Array<any>;
    title: string;

    constructor () {
        super();
        this.publishers= [];
        this.title= "";
    }
}

@Component({
       selector: 'app-breakingNews',
    templateUrl: './breakingnews.component.html',
})

export class BreakingNewsComponent implements OnInit{
    pagination: Data = new Data()


    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData: Array<any>;

    constructor( private apiService: ApiService ) {}

    ngOnInit(): void {
        this.getAllBreakingNews();
    }   

    getAllBreakingNews() {
        this.apiService.sendRequest(requests.getAllBreakingNews, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            console.log("ALL-BREAKING-NEWS", res);
        })
    }

    clean(obj:any) {
        for (const propName in obj) {
          if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName] === []) {
            delete obj[propName];
          }
        }
        return obj
      }

    updateCheckedSet(id: number, checked: boolean): void {
        if (checked) {
            this.setOfCheckedId.add(id);
        } else {
            this.setOfCheckedId.delete(id);
        }
    }

    onItemChecked(id: number, checked: boolean): void {
        this.updateCheckedSet(id, checked);
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }
}    