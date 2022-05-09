import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';



@Component({
       selector: 'app-episode',
    templateUrl: './episode.component.html',
})

export class EpisodeComponent implements OnInit{
    pagination: Pagination = new Pagination()
    indeterminate = false;
    checked = false;
    loading = true;
    setOfCheckedId = new Set<number>();
    allEpisodes: any;
    episodesCount: any;

    constructor(private apiService: ApiService, private message: NzMessageService, private modal: NzModalService) {}

    ngOnInit(): void {
        this.getAllEpisodes();
    }

    getAllEpisodes() {
        this.apiService.sendRequest(requests.getAllEpisodes, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
            this.allEpisodes= res.response.episodes;
            this.episodesCount= res.response.totalCount;
            console.log("ALL-EPISODES", this.allEpisodes);
            this.loading = false;
        },err => {
            this.loading = false;
            throw this.handleError(err);
          })
    }

    handleError(err: any) {
        if (err) {
          this.allEpisodes = [];
          this.episodesCount = 0;
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
        this.pagination={...this.pagination, isActive: data.isActive, search: data.search, publishedBy: data.publishedBy, programId: data.programId, date: data.date};
        this.pagination.pageNo= 1;
        this.getAllEpisodes();        
    }

    receiveFilter(data: Pagination) {
        this.pagination={...this.pagination, isActive: data.isActive, search: data.search, publishedBy: data.publishedBy, programId: data.programId, date: data.date};
        this.pagination.pageNo= 1;
        this.getAllEpisodes();        
    }

    onPageIndexChange(pageNo: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, pageNo: pageNo})
        this.getAllEpisodes();
    }

    onPageSizeChange(limit: number) {
        this.loading= true;
        this.pagination = Object.assign({...this.pagination, limit: limit})
        this.getAllEpisodes();
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
        this.allEpisodes.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.allEpisodes.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }

    deleteSelected() {
        const id= [];
          console.log(this.setOfCheckedId.forEach(x=>{
            id.push(x)
          }));
          this.apiService.sendRequest(requests.deleteProgramEpisode,'delete',{id:id}).subscribe((res:any) => {
            this.setOfCheckedId.clear();
            this.checked= false;
            this.indeterminate= false;
            this.getAllEpisodes();
            this.message.create('success', `Episode Deleted Successfully`)
            })
        }
        
        deleteEpisode(episodeId: number): void {
            this.apiService.sendRequest(requests.deleteProgramEpisode, 'delete', {id:[episodeId]}).subscribe((res:any) => {
                console.log("DELETE-EPISODE", res);
                this.getAllEpisodes();
                this.message.create('success', `Episode Deleted Successfully`)
            })
        }
    
        showDeleteConfirm(id?: number): void {
            this.modal.confirm({
              nzTitle: 'Delete',
              nzContent: '<b style="color: red;">Are you sure to delete this Episode?</b>',
              nzOkText: 'Yes',
            //   nzOkType: 'danger',
              nzOnOk: () => {
                  if(id) {
                      this.deleteEpisode(id);
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
                this.getAllEpisodes();
                }
            });
          }
}    