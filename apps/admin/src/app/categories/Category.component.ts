import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';

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
       selector: 'app-category',
    templateUrl: './Category.component.html',
    styleUrls: ['./Category.component.scss']
})

export class CategoryComponent implements OnInit {
    pagination: Data= new Data();
    allCategories: any;
    indeterminate = false;
    checked = false;
    loading= true;
    expandedId: any;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData:Array<any> = [];    

    constructor(private apiService: ApiService, private message: NzMessageService ) {
    }

    ngOnInit() : void {
        this.getAllCategories()
    }

    getAllCategories() {
        this.apiService.sendRequest(requests.getAllCategories, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allCategories= res.response.categories;
            console.log("ALL-CATEGORIES", this.allCategories);
            // this.strucCategories = this.catToNodes(this.allCategories);
            this.loading= false;
        },err => {
            this.loading = false;
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

    //   catToNodes() {
    //       for(let i=0; i<=this.allCategories.length; i++) {
    //           this.allCategories[i].expand = false;
    //       }
    // }

    deleteCategories(categoryId: number) {
        this.apiService.sendRequest(requests.deleteCategories, 'delete', {ids:[categoryId]}).subscribe((res:any) => {
            console.log("DEL-CATEGORY", res);
            this.getAllCategories();
            this.message.create('success', `Category Deleted Successfully`)
        })
    }

    updateCategoryOrder(ids?:Array<any>) {
        this.apiService.sendRequest(requests.updateCategoryOrder, 'put', {ids:ids}).subscribe((res:any) => {
            console.log("CATEGORY-ORDER", res);
        })
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

    drop(event: CdkDragDrop<string[] | any>) {
        moveItemInArray(this.allCategories, event.previousIndex, event.currentIndex);
        this.updateCategoryOrder(this.allCategories.map(x=>x.id));
      }

      dropSubCategories(event: CdkDragDrop<string[] | any>, index: number) {
        moveItemInArray(this.allCategories[index].sub, event.previousIndex, event.currentIndex);
        this.updateCategoryOrder(this.allCategories[index].sub.map(x=>x.id));
      }

      toggle(catId: any) {
          this.expandedId= this.expandedId===catId ? null : catId;
      }
      
}    