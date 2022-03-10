import { Component, OnInit } from '@angular/core'
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';



export interface Data {
    id: number;
    name: string;
    age: number;
    address: string;
    disabled: boolean;
}

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
    listOfCurrentPageData: Data[] = [];    

    nodes = [
        {
            title: '0-1',
            key: '01',
            children: [
              {
                title: '0-1-0',
                key: '010',
                children: [
                  { title: '0-1-0-0', key: '0100', isLeaf: true },
                  { title: '0-1-0-1', key: '0101', isLeaf: true },
                  { title: '0-1-0-2', key: '0102', isLeaf: true }
                ]
              },
              {
                title: '0-1-1',
                key: '011',
                children: [
                  { title: '0-1-1-0', key: '0110', isLeaf: true },
                  { title: '0-1-1-1', key: '0111', isLeaf: true },
                  { title: '0-1-1-2', key: '0112', isLeaf: true }
                ]
              }
            ]
          },
          {
            title: '0-2',
            key: '02',
            isLeaf: true
          }
    ]

    constructor(private apiService: ApiService ) {
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

    nzEvent(event: NzFormatEmitEvent): void {
        console.log(event);
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