import { Component, EventEmitter, Output } from '@angular/core'
import { Pagination } from '../../common/models/pagination';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';

@Component({
    selector: 'presenters-filter',
    templateUrl: 'filter.component.html'
})

export class FilterComponent {
    @Output() statusEmitter = new EventEmitter (); 
    @Output() filterEmitter = new EventEmitter (); 
    filterModel : {isActive: boolean, title: string, publishers: Array<any>} = {isActive: null, title: null, publishers: []}
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
        this.filterModel= { isActive : null, title : null, publishers: []};
        this.filterEmitter.emit(this.filterModel);
    }
   
}    