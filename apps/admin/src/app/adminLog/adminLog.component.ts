import { Component, OnInit } from '@angular/core'
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


@Component({
       selector: 'app-adminLog',
    templateUrl: './adminLog.component.html',
})

export class AdminLogComponent implements OnInit{
    pagination: Pagination = new Pagination();
    allAdminLogs: any;
    allSessions: any;
    sessionsCount: any;
    logsCount: any;
    selectedSession: any;
    loading = true;
    isVisible = false;
    isConfirmLoading = false;

   
    constructor( private apiService: ApiService ) {}

    ngOnInit(): void {
      this.getAllSessions();
    }
    
    getAllSessions() {
      this.apiService.sendRequest(requests.getAllSessions, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
        this.allSessions= res.response.sessions;
        this.sessionsCount= res.response.totalCount;
        console.log("ALL-SESSIONS", this.allSessions);
        this.loading = false;
      },err => {
        this.loading = false;
        throw this.handleError(err);
      })
    }

    handleError(err: any) {
      if (err) {
        this.allSessions = [];
        this.sessionsCount= 0;
      }
      return err
    }

    clean(obj:any) {
        for (const propName in obj) {
          if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
            delete obj[propName];
          }
        }
        return obj
    }

    receiveStatus(data: Pagination) {
      this.pagination={...this.pagination, userId: data.userId, date: data.date};
      this.pagination.pageNo= 1;
      this.getAllSessions();        
  }

    receiveFilter(data: Pagination) {
      this.pagination={...this.pagination, userId: data.userId, date: data.date};
      this.pagination.pageNo= 1;
      this.getAllSessions();        
  }

    onPageIndexChange(pageNo: number) {
      this.loading= true;
      this.pagination = Object.assign({...this.pagination, pageNo: pageNo})
      this.getAllSessions();
  }

    onPageSizeChange(limit: number) {
      this.loading= true;
      this.pagination = Object.assign({...this.pagination, limit: limit})
      this.getAllSessions();
  }

    showModal(index: number): void {
        this.isVisible = true;
        this.selectedSession= this.allSessions[index];
        this.apiService.sendRequest(requests.getAllAdminLogs, 'get', {limit: 1000, pageNo: 1, sessionId: this.selectedSession.id}).subscribe((res:any) => {
            this.allAdminLogs= res.response.logs;
            this.logsCount= res.response.totalCount;
            console.log("ALL-ADMIN-LOGS", this.allAdminLogs);
            this.loading = false;
        },err => {
            this.loading = false;
          })
  }
    
    handleOk(): void {
        this.isConfirmLoading = true;
        setTimeout(() => {
          this.isVisible = false;
          this.isConfirmLoading = false;
        }, 2000);
  }
    
    handleCancel(): void {
        this.isVisible = false;
        this.selectedSession= null;
        this.allAdminLogs= null;
        this.logsCount= 0;
  }

}    