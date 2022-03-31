import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';

export class Data extends Pagination {
    // parentCategoryId?:Array<any>;
  
    publishers?:Array<any>;
    includeNews?: any; 
    newsLImit?: any;

    constructor() {
        super();
        // this.parentCategoryId= [];
        this.publishers= [];
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
    listOfCurrentPageData = [];    

    constructor(private apiService: ApiService, private message: NzMessageService, private modal: NzModalService ) {
    }

    ngOnInit() : void {
        this.getAllCategories()
    }

    getAllCategories() {
        this.apiService.sendRequest(requests.getAllCategories, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allCategories= res.response.categories;
            console.log("ALL-CATEGORIES", this.allCategories);
            this.loading= false;
        },err => {
            this.loading = false;
            throw this.handleError(err)
          })
    }

    handleError(err: any) {
        if (err) {
          this.allCategories = [];
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

    deleteCategories(categoryId: number) {
        this.apiService.sendRequest(requests.deleteCategories, 'delete', {ids:[categoryId]}).subscribe((res:any) => {
            console.log("DEL-CATEGORY", res);
            this.getAllCategories();
            this.message.create('success', `Category Deleted Successfully`)
        })
    }

    receiveStatus(data: Pagination) {
        this.pagination={...this.pagination, status: data.status, title: data.title, publishers: data.publishers};
        this.pagination.pageNo= 1;
        this.getAllCategories();        
    }

    receiveFilter(data: Pagination) {
        this.pagination={...this.pagination, status: data.status, title: data.title, publishers: data.publishers};
        this.pagination.pageNo= 1;
        this.getAllCategories();        
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

    onAllChecked(checked: boolean): void {
        this.allCategories.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.allCategories.filter(({ disabled }) => !disabled);
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

    deleteSelected() {
        const id=[];
          console.log(this.setOfCheckedId.forEach(x=>{
            id.push(x)
          }));
          this.apiService.sendRequest(requests.deleteCategories,'delete',{ids:id}).subscribe((res:any) => {
            this.setOfCheckedId.clear();
            this.checked= false;
            this.indeterminate= false;
            this.getAllCategories();
          })
    }

    showDeleteConfirm(id?: number): void {
        this.modal.confirm({
          nzTitle: 'Delete',
          nzContent: '<b style="color: red;">Are you sure to delete this category?</b>',
          nzOkText: 'Yes',
        //   nzOkType: 'danger',
          nzOnOk: () => {
              if(id) {
                  this.deleteCategories(id);
              }
              else {
                  this.deleteSelected();
              }
            },
          nzCancelText: 'No',
          nzOnCancel: () => {
            this.setOfCheckedId.clear();
            this.checked= false;
            this.indeterminate= false;
            this.getAllCategories();
            }
        });
    }
      
}    