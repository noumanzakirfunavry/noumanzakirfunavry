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
       selector: 'app-jobs',
    templateUrl: './jobs.component.html',
})

export class JobsComponent implements OnInit {
    pagination: {pageNo: number, limit: number, status?: string, title?: string, branchId?:Array<any>, publishers?:Array<any>} = {pageNo: 1, limit: 10}
    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData: Data[] = [];


    constructor(private apiService: ApiService ) {}

    ngOnInit(): void {
        this.getAllJobs()
    }

    getAllJobs() {
        this.apiService.sendRequest(requests.getAllJobs, 'get', this.pagination).subscribe((res:any) => {
            console.log("ALL-JOBS", res);
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
}    