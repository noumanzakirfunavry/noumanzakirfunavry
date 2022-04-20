
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Pagination } from '../common/models/pagination';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


@Component({
       selector: 'app-menus',
    templateUrl: './menus.component.html',
    styleUrls: ['./menus.component.scss']
})

export class MenusComponent implements OnInit{
  pagination: {
    pageNo: number, 
    limit: number, 
    isActive?: boolean,
    position?: string, 
    title?: string } = {pageNo: 1, limit: 1000};
    allMenus: any;
    indeterminate = false;
    checked = false;
    loading= true;
    expandedId: any;
    setOfCheckedId = new Set<number>();
    listOfCurrentPageData = [];

    constructor( 
      private apiService: ApiService, 
      private modal: NzModalService, 
      private message: NzMessageService ) {}

    ngOnInit(): void {
      this.getAllMenus();
    }

    getAllMenus() {
      this.apiService.sendRequest(requests.getAllMenus, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
        this.allMenus= res.response;
        console.log("ALL-MENUS", this.allMenus);
        this.loading= false;
      },err => {
        this.loading = false;
        throw this.handleError(err)
      })
    }

    handleError(err: any) {
      if (err) {
        this.allMenus = [];
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

    deleteMenus(menusId: number) {
      this.apiService.sendRequest(requests.deleteMenus, 'delete', {id:[menusId]}).subscribe((res:any) => {
        console.log("DEL-MENUS", res);
        this.getAllMenus();
        this.message.create('success', `Menu Deleted Successfully`);
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

    onAllChecked(checked: boolean): void {
      this.allMenus.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
      this.refreshCheckedStatus();
  }

  receiveStatus(data: Pagination) {
    this.pagination={...this.pagination, isActive: data.isActive, title: data.title, position: data.position};
    this.pagination.pageNo= 1;
    this.getAllMenus();        
}

receiveFilter(data: Pagination) {
    this.pagination={...this.pagination, isActive: data.isActive, title: data.title, position: data.position};
    this.pagination.pageNo= 1;
    this.getAllMenus();        
}

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.allMenus.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }

    updateMenuOrder(ids?:Array<any>) {
      this.apiService.sendRequest(requests.updateMenuOrder, 'put', {id:ids}).subscribe((res:any) => {
          console.log("MENU-ORDER", res);
      })
  }

    drop(event: CdkDragDrop<string[] | any>) {
      moveItemInArray(this.allMenus, event.previousIndex, event.currentIndex);
      this.updateMenuOrder(this.allMenus.map(x=>x.id));
    }

  dropSubMenus(event: CdkDragDrop<string[] | any>, index: number) {
      moveItemInArray(this.allMenus[index].childMenus, event.previousIndex, event.currentIndex);
      this.updateMenuOrder(this.allMenus[index].sub.map(x=>x.id));
    }

  toggle(menuId: any) {
        this.expandedId= this.expandedId===menuId ? null : menuId;
    }

  deleteSelected() {
    const id=[];
      console.log(this.setOfCheckedId.forEach(x=>{
        id.push(x)
      }));
      this.apiService.sendRequest(requests.deleteMenus,'delete',{id:id}).subscribe((res:any) => {
        this.setOfCheckedId.clear();
        this.checked= false;
        this.indeterminate= false;
        this.getAllMenus();
        this.message.create('success', `Menu Deleted Successfully`);
      })
}

showDeleteConfirm(id?: number): void {
    this.modal.confirm({
      nzTitle: 'Delete',
      nzContent: '<b style="color: red;">Are you sure to delete this menu?</b>',
      nzOkText: 'Yes',
    //   nzOkType: 'danger',
      nzOnOk: () => {
          if(id) {
              this.deleteMenus(id);
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
        this.getAllMenus();
        }
    });
}
}    