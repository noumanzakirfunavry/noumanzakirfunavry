import { Component, OnInit } from '@angular/core'
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';



@Component({
       selector: 'app-programs',
    templateUrl: './programs.component.html',
})

export class ProgramsComponent implements OnInit{
    pagination: Pagination = new Pagination()
    indeterminate = false;
    checked = false;
    loading = true;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData = [];
    allPrograms: any;
    programsCount: any;

    constructor( private apiService: ApiService ) {}

    ngOnInit(): void {
        this.getAllPrograms();
    }

    getAllPrograms() {
        this.apiService.sendRequest(requests.getAllPrograms, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allPrograms= res.response.program;
            this.programsCount= res.response.totalCount;
            console.log("ALL-PROGRAMS", this.allPrograms);
            this.loading= false;
        },err => {
            this.loading = false;
            throw this.handleError(err);
          })
    }

    handleError(err: any) {
        if (err) {
          this.allPrograms = [];
          this.programsCount = 0;
        }
        return err
      }

    clean(obj:any) {
        for (const propName in obj) {
          if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName] === []) {
            delete obj[propName];
          }
        }
        return obj
    }

    receiveStatus(data: Pagination) {
        this.pagination={...this.pagination, isActive: data.isActive, search: data.search, publishedBy: data.publishedBy, categoryId: data.categoryId, newsType: data.newsType, date: data.date};
        this.pagination.pageNo= 1;
        this.getAllPrograms();        
    }

    receiveFilter(data: Pagination) {
        this.pagination={...this.pagination, isActive: data.isActive, search: data.search, publishedBy: data.publishedBy, categoryId: data.categoryId, newsType: data.newsType, date: data.date};
        this.pagination.pageNo= 1;
        this.getAllPrograms();        
    }

    onPageIndexChange(pageNo: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, pageNo: pageNo})
        this.getAllPrograms();
    }

    onPageSizeChange(limit: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, limit: limit})
        this.getAllPrograms();
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

    onAllChecked(checked: boolean): void {
        this.allPrograms.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.allPrograms.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }
}    