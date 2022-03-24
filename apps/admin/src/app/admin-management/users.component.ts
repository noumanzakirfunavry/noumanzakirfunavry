import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';

export class Admin extends Pagination {
    name?: string;
    

    constructor() {
        super();
        this.name= '';
    }
}


@Component({
       selector: 'app-users',
    templateUrl: './users.component.html',
})

export class UsersComponent implements OnInit{
    pagination: Admin = new Admin()
    allAdmins: any;
    loading = true;
    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData:Array<any> = [];

    

    constructor( private apiService: ApiService, private message: NzMessageService ) {}

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
          if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
            delete obj[propName];
          }
        }
        return obj
      }

      deleteAdmins(userId: number) {
          this.apiService.sendRequest(requests.deleteUsers, 'delete', {id:[userId]}).subscribe((res:any) => {
              console.log("DELETE-ADMIN", res);
              this.getAllAdmins();
              this.message.create('success', `Admin Deleted Successfully`);
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