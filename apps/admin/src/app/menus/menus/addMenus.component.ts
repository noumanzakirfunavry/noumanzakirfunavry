import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';

@Component({
    selector: 'app-addMenus',
    templateUrl: './addMenus.component.html',
    styles: [
        `
          [nz-form]:not(.ant-form-inline):not(.ant-form-vertical) {
            max-width: 600px;
          }
        `
      ]
})

export class AddMenusComponent implements OnInit{
  pagination: {
    pageNo: number, 
    limit: number, 
    isActive?: boolean,
    position?: string, 
    title?: string } = {pageNo: 1, limit: 1000};
  menuForm: FormGroup;
  menuId: number;
  allMenus: any;
  menuById: any;
  loader= true;
  isLoading= false;
  
    constructor(
      private fb: FormBuilder, 
      private apiService: ApiService, 
      private route: Router, 
      private activatedRoute: ActivatedRoute, 
      private message: NzMessageService) {}
  
    ngOnInit(): void {
      this.getAllMenus();
      this.activatedRoute.paramMap.subscribe((params: ParamMap | any) => {
        this.menuId = + params.get('id');
        if (this.menuId) {
          this.getMenuById();
        }
        else {
          this.initForm();
          setTimeout(() => {
            this.loader=false
          }, 200);
        }
      });
    }

    initForm() {
      this.menuForm = this.fb.group({
        title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
        position: [null, [Validators.required]],
        parentMenuId: [null],
        url: [null, [Validators.required, 
          // Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
        ]],
        isActive: [false],
        visible: [true, [Validators.required]],
        // orderNo: [1, [Validators.required]]
      });
    }

    menus() {
      for (const i in this.menuForm.controls) {
        this.menuForm.controls[i].markAsDirty();
        this.menuForm.controls[i].updateValueAndValidity();
      }
      if(this.menuForm.valid) {
        this.isLoading= true;
        this.apiService.sendRequest(this.menuId ? requests.updateMenu + this.menuId : requests.addMenu, this.menuId ? 'put' : 'post', this.menuForm.value).subscribe((res:any) => {
          console.log("MENU", res);
          this.menuForm.reset();
          this.route.navigateByUrl('menus/list');
          setTimeout(() => {
            this.isLoading= false;
          }, 2000);
          if(this.menuId) {
            this.message.create('success', `Menu Updated Successfully`)
        }
        else {
            this.message.create('success', `Menu Added Successfully`)
        }
        })
      }
    }

    getAllMenus() {
      this.apiService.sendRequest(requests.getAllMenus, 'get', this.pagination).subscribe((res:any) => {
        this.allMenus= res.response;
        console.log("ALL-MENUS", this.allMenus);
      })
    }

    getOtherMenus() {
      return this.allMenus && this.allMenus.filter((x:any) => x.id != this.menuId)
    }

    getMenuById() {
      this.apiService.sendRequest(requests.getMenuById + this.menuId, 'get').subscribe((res:any) => {
        this.menuById= res.response;
        console.log("MENU-BY-ID", this.menuById);
        this.menuForm = this.fb.group({
          title: [this.menuById?.title || null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
          position: [this.menuById?.position || null, [Validators.required]],
          parentMenuId: [this.menuById?.parentMenuId || null],
          url: [this.menuById?.url || null, [Validators.required, 
            // Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
          ]],
          isActive: [this.menuById?.isActive || false],
          visible: [this.menuById?.visible || true, [Validators.required]],
          // orderNo: [1, [Validators.required]]
        });
        setTimeout(() => {
          this.loader=false
        }, 200);
      })
    }

    cancel() {
      this.route.navigateByUrl('menus/list');
    }

}