import { Component } from '@angular/core'
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

export class AddressesComponent {

    pagination: { limit: number, pageNo: number, status?: string, title?: string, publishers?:Array<any> } = {limit: 10, pageNo: 1}
    allBranches: any;
    ids= [];
    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData: Data[] = [];

    constructor(private apiService: ApiService ) {}

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
        if(branchId){
            this.ids=[branchId];
            this.apiService.sendRequest(requests.deleteBranches, 'delete', this.ids).subscribe((res:any) => {
                console.log("DELETE-BRANCH", res);
                this.getAllBranches();
            })
          }
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