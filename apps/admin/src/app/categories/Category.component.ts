import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


@Component({
       selector: 'app-category',
    templateUrl: './Category.component.html',
})

export class CategoryComponent implements OnInit {
    pagination: {
        limit: number, 
        pageNo: number, 
        parentCategoryId?:Array<any>, 
        publishers?:Array<any>, 
        status?: string, 
        title?: string, 
        includeNews?: any, 
        newsLImit?: any 
    } = {limit: 10, pageNo: 1}
    allCategories: any;

    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData:Array<any> = [];    

    constructor(private apiService: ApiService, private message: NzMessageService ) {
    }

    ngOnInit() : void {
        this.getAllCategories()
    }

    getAllCategories() {
        this.apiService.sendRequest(requests.getAllCategories, 'get', this.pagination).subscribe((res:any) => {
            this.allCategories= res.response.categories;
            console.log("ALL-CATEGORIES", this.allCategories);
        })
    }

    deleteCategories(categoryId: number) {
        this.apiService.sendRequest(requests.deleteCategories, 'delete', {ids:[categoryId]}).subscribe((res:any) => {
            console.log("DEL-CATEGORY", res);
            this.getAllCategories();
            this.message.create('success', `Category Deleted Successfully`)
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
      }
      
}    