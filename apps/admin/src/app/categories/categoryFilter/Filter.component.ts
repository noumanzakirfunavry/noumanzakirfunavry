import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Pagination } from 'src/app/common/models/pagination';
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
    selector: 'app-filter',
    templateUrl: './Filter.component.html'
})

export class FilterComponent implements OnInit{
    @Output() statusEmitter = new EventEmitter (); 
    @Output() filterEmitter = new EventEmitter (); 
    filterModel : {status: boolean, title: string, publishers: Array<any>} = {status: null, title: null, publishers: []}
    pagination : Pagination = new Pagination();
    allAdmins: any;
    loading= true;

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.getAllAdmins();
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

    clean(obj:any) {
        for (const propName in obj) {
          if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName] === []) {
            delete obj[propName];
          }
        }
        return obj
      }

    search() {
        this.statusEmitter.emit(this.filterModel);
    }

    clear() {
        this.filterModel= { status : null, title : null, publishers: []};
        this.filterEmitter.emit(this.filterModel);
    }
   
}    