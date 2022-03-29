import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Pagination } from 'src/app/common/models/pagination';
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
    selector: 'news-filter',
    templateUrl: './newsFilter.component.html'
})

export class FilterNewsComponent  implements OnInit {
    @Output() statusEmitter = new EventEmitter (); 
    @Output() filterEmitter = new EventEmitter (); 
    filterModel : {isActive: boolean, search: string, publishedBy: number, categoryId: number, newsType: string, date: any} = {isActive: null, search: null, publishedBy: null, categoryId: null, newsType: '', date: ''}
    pagination : Pagination = new Pagination();
    allAdmins: any;
    allCategories: any;
    loading= true;
    validateForm: FormGroup;
    controlArray: Array<{ index: number; show: boolean }> = [];
    isCollapse = true;
  
    toggleCollapse(): void {
      this.isCollapse = !this.isCollapse;
      this.controlArray.forEach((c, index) => {
        c.show = this.isCollapse ? index < 6 : true;
      });
    }
  
    resetForm(): void {
      this.validateForm.reset();
    }
  
    constructor(private fb: FormBuilder, private apiService: ApiService) {}
  
    ngOnInit(): void {
      this.getAllAdmins();
      this.getAllCategories();
      this.validateForm = this.fb.group({});
      for (let i = 0; i < 6; i++) {
        this.controlArray.push({ index: i, show: i < 6 });
        this.validateForm.addControl(`field${i}`, new FormControl('',[Validators.required]));
      }
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

  getAllCategories() {
    this.apiService.sendRequest(requests.getAllCategories, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
        this.allCategories= res.response.categories;
        console.log("ALL-CATEGORIES", this.allCategories);
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
      this.filterModel= { isActive : null, search : null, publishedBy: null, categoryId: null, newsType: '', date: ''};
      this.filterEmitter.emit(this.filterModel);
  }
}    