import { Component, OnInit } from '@angular/core'
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


@Component({
       selector: 'app-adminLog',
    templateUrl: './adminLog.component.html',
})

export class AdminLogComponent implements OnInit{
    pagination: {limit: number, pageNo: number, userId: number} = {limit: 10, pageNo: 1, userId: 1}
    allAdminLogs: any;
    loading = true;
    isVisible = false;
    isConfirmLoading = false;

    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData = [];

   
    constructor( private apiService: ApiService ) {}

    ngOnInit(): void {
        this.getAllAdminLogs();
    }
    
    getAllAdminLogs() {
        this.apiService.sendRequest(requests.getAllAdminLogs, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allAdminLogs= res.response;
            console.log("ALL-ADMIN-LOGS", this.allAdminLogs);
            this.loading = false;
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

    onAllChecked(checked: boolean): void {
        this.allAdminLogs.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.allAdminLogs.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }

    showModal(): void {
        this.isVisible = true;
      }
    
      handleOk(): void {
        this.isConfirmLoading = true;
        setTimeout(() => {
          this.isVisible = false;
          this.isConfirmLoading = false;
        }, 3000);
      }
    
      handleCancel(): void {
        this.isVisible = false;
      }
}    