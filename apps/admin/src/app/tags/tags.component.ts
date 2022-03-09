import { Component, OnInit } from '@angular/core'
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
       selector: 'app-tags',
    templateUrl: './tags.component.html',
})

export class TagsComponent implements OnInit {
    pagination: {limit: number, pageNo: number, title?: string, status?: string} = {limit: 10, pageNo: 1}
    allTags: any;
    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData: Data[] = [];

    

    constructor(private apiService: ApiService ) {}

    ngOnInit() {
        this.getAllTags();
    }

    getAllTags() {
        this.apiService.sendRequest(requests.getAllTags, 'get', this.pagination).subscribe((res:any) => {
            this.allTags= res.tags;
            console.log("ALL-TAGS", this.allTags);
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

    deleteTags(tagId: any) {
        this.apiService.sendRequest(requests.deleteTags + tagId, 'delete').subscribe((res:any) => {
            console.log("DELETE-TAG", res);
            this.getAllTags();
        })
    }
    
}    