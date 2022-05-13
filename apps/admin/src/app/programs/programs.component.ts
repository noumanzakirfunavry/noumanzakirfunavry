import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';



@Component({
       selector: 'app-programs',
    templateUrl: './programs.component.html',
})

export class ProgramsComponent implements OnInit{
    pagination: Pagination = new Pagination()
    indeterminate = false;
    checked = false;
    loading = true;
    setOfCheckedId = new Set<number>();
    allPrograms: any;
    programsCount: any;

    constructor( private apiService: ApiService, private message: NzMessageService, private modal: NzModalService ) {}

    ngOnInit(): void {
        this.getAllPrograms();
    }

    getAllPrograms() {
        this.apiService.sendRequest(requests.getAllPrograms, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allPrograms= res.response.program;
            this.programsCount= res.response.totalCount;
            console.log("ALL-PROGRAMS", this.allPrograms);
            this.loading= false;
        },err => {
            this.loading = false;
            throw this.handleError(err);
          })
    }

    handleError(err: any) {
        if (err) {
          this.allPrograms = [];
          this.programsCount = 0;
        }
        return err
      }

    clean(obj:any) {
        for (const propName in obj) {
          if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName] === []) {
            delete obj[propName];
          }
        }
        return obj
    }

    receiveStatus(data: Pagination) {
        this.pagination={...this.pagination, isActive: data.isActive, search: data.search, publisherId: data.publisherId};
        this.pagination.pageNo= 1;
        this.getAllPrograms();        
    }

    receiveFilter(data: Pagination) {
        this.pagination={...this.pagination, isActive: data.isActive, search: data.search, publisherId: data.publisherId};
        this.pagination.pageNo= 1;
        this.getAllPrograms();        
    }

    onPageIndexChange(pageNo: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, pageNo: pageNo})
        this.getAllPrograms();
    }

    onPageSizeChange(limit: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, limit: limit})
        this.getAllPrograms();
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
        this.allPrograms.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.allPrograms.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }

    deleteSelected() {
        const id= [];
          console.log(this.setOfCheckedId.forEach(x=>{
            id.push(x)
          }));
          this.apiService.sendRequest(requests.deleteProgram,'delete',{id:id}).subscribe((res:any) => {
            this.setOfCheckedId.clear();
            this.checked= false;
            this.indeterminate= false;
            this.getAllPrograms();
            this.message.create('success', `Program Deleted Successfully`)
            })
        }
        
        deleteProgram(programId: number): void {
            this.apiService.sendRequest(requests.deleteProgram, 'delete', {id:[programId]}).subscribe((res:any) => {
                console.log("DELETE-PROGRAM", res);
                this.getAllPrograms();
                this.message.create('success', `Program Deleted Successfully`)
            })
        }
    
        showDeleteConfirm(id?: number): void {
            this.modal.confirm({
              nzTitle: 'Delete',
              nzContent: '<b style="color: red;">Are you sure to delete this Program?</b>',
              nzOkText: 'Yes',
            //   nzOkType: 'danger',
              nzOnOk: () => {
                  if(id) {
                      this.deleteProgram(id);
                  }
                  else {
                      this.deleteSelected();
                  }
                },
              nzCancelText: 'No',
              nzOnCancel: () => {
                this.setOfCheckedId.clear();
                this.checked= false;
                this.indeterminate= false;
                this.getAllPrograms();
                }
            });
          }
}    