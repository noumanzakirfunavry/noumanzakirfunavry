import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Pagination } from '../../common/models/pagination';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';

@Component({
    selector: 'job-filter',
    templateUrl: './job-filter.component.html'
})

export class JobFilterComponent implements OnInit {
    @Output() statusEmitter = new EventEmitter (); 
    @Output() filterEmitter = new EventEmitter ();
    pagination: Pagination = new Pagination();
    allBranches: any;
    allAdmins: any;
    loading= true;
    filterModel : {status: boolean, title: string, publisher: number, branchId: Array<any>} = {status: null, title: null, publisher: null, branchId: []}

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.getAllBranches();
        this.getAllAdmins();
    }

    getAllBranches() {
        this.apiService.sendRequest(requests.getAllBranches, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allBranches= res.response.branches;
            console.log("ALL-BRANCHES", this.allBranches);
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

    getAllAdmins() {
        this.apiService.sendRequest(requests.getAllAdmins, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allAdmins= res.response.admins;
            console.log("ALL-ADMINS", this.allAdmins);
            this.loading= false;
        },err => {
            this.loading = false;
          })
    }

    search() {
        // if(this.filterModel.publishers) {
        //     this.filterModel.publishers= [this.filterModel.publishers]
        // }
        this.statusEmitter.emit(this.filterModel);
    }

    clear() {
        this.filterModel= { status : null, title : null, publisher: null, branchId: []};
        this.filterEmitter.emit(this.filterModel);
    }
   
}    