import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
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
       selector: 'app-addresses',
    templateUrl: './addresses.component.html',
})

export class AddressesComponent implements OnInit{

    pagination: { limit: number, pageNo: number, status?: string, title?: string, publishers?:Array<any> } = {limit: 10, pageNo: 1}
    allBranches: any;
    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData: Data[] = [];

    constructor(private apiService: ApiService, private message: NzMessageService ) {}

    ngOnInit(): void {
        this.getAllBranches();
    }

    getAllBranches() {
        this.apiService.sendRequest(requests.getAllBranches, 'get', this.pagination).subscribe((res:any) => {
            this.allBranches= res.response.branches;
            console.log("ALL-BRANCHES", this.allBranches);
        })
    }

    deleteBranch(branchId: any) {
        this.apiService.sendRequest(requests.deleteBranches, 'delete', {ids:[branchId]}).subscribe((res:any) => {
            console.log("DELETE-BRANCH", res);
            this.getAllBranches();
            this.message.create('success', `Address Deleted Successfully`);
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