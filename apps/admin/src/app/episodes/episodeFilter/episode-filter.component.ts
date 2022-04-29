import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Pagination } from '../../common/models/pagination';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';

@Component({
    selector: 'episode-filter',
    templateUrl: './episode-filter.component.html'
})

export class EpisodeFilterComponent implements OnInit{
    @Output() statusEmitter = new EventEmitter (); 
    @Output() filterEmitter = new EventEmitter (); 
    filterModel : {isActive: boolean, search: string, publishedBy: number, programId: number, date: any} = {isActive: null, search: null, publishedBy: null, programId: null, date: ''}
    pagination : Pagination = new Pagination();
    allAdmins: any;
    allPrograms: any;
    loading= true;

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.getAllAdmins();
        this.getAllPrograms();
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

    getAllPrograms() {
        this.apiService.sendRequest(requests.getAllPrograms, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allPrograms= res.response.program;
            console.log("ALL-PROGRAMS", this.allPrograms);
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
        if(this.filterModel.date) {
            this.filterModel.date= new Date(this.filterModel.date).toISOString().split('T')[0]
          }
        this.statusEmitter.emit(this.filterModel);
    }

    clear() {
        this.filterModel= { isActive : null, search : null, publishedBy: null, programId: null, date: '' };
        this.filterEmitter.emit(this.filterModel);
    }
   
}    