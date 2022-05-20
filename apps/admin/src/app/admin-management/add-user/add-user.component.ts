import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AnalysisLanguage } from '@elastic/elasticsearch/lib/api/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Pagination } from '../../common/models/pagination';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';


export class Data extends Pagination {
  title: string;

  constructor () {
      super();
      this.title= "";
  }
}

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styles: [
    `
          [nz-form]:not(.ant-form-inline):not(.ant-form-vertical) {
            max-width: 600px;
          }
          nz-select {
        margin-right: 8px;
        width: 120px;
      }
        `
  ]
})

export class AddUserComponent implements OnInit{
  pagination : Data = new Data();
  adminForm: FormGroup;
  allRights: any;
  userId: number;
  userById: any;
  rightsValue: any;
  submitted= false;
  loader= true;
  user: any;
  isLoading= false;
  userRoleId: number;
  adminRoleId: any;

  constructor(
    private fb: FormBuilder, 
    private apiService: ApiService, 
    private activatedRoute: ActivatedRoute, 
    private message: NzMessageService,
    private route: Router
    ) { }

  ngOnInit(): void {
   
    this.user = JSON.parse(localStorage.getItem('admin') || '{}');
    this.userRoleId= this.user.user.roleId;
    this.activatedRoute.paramMap.subscribe((params: ParamMap | any) => {
      this.userId = + params.get('id');
       this.getAllRights();
    });
  }

  inItForm() {
      this.allRights.forEach(right=>{
          right['checked']=false;
          right['label']=right.title
        })
    this.adminForm = this.fb.group({
      // name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250), Validators.pattern('[A-Za-z ]*$')]],
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250), Validators.pattern('^(?:[\u0009-\u000D\u001C-\u007E\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,250}$')]],
      rolesId: [null, [Validators.required]],
      // userName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250), Validators.pattern('^[A-Za-z][A-Za-z0-9_][A-Za-z0-9!@#$%^&*_]{0,250}$')]],
      userName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250), Validators.pattern('^(?:[a-zA-Z0-9\s!@,=%$#&*_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,250}$')]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      confirmPassword: [null, [Validators.required, this.requiredValidator]],
      email: [null, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$'), Validators.required]],
      isActive: [false],
      rights: [this.allRights, [Validators.required]]
    });
  }

  admin() {
    for (const i in this.adminForm.controls) {
      this.adminForm.controls[i].markAsDirty();
      this.adminForm.controls[i].updateValueAndValidity();
    }
    this.submitted=true;
    if(this.adminForm.valid) {
      this.isLoading= true;
      setTimeout(() => {
        this.isLoading= false;
      }, 2000);
      const obj= this.adminForm.value;
      obj['name'] = this.adminForm.value.name.trim();
      obj['userName']= this.adminForm.value.userName.toLowerCase();
      if(this.adminRoleId==3) {
        this.allRights.forEach(right=>{
          right['checked']=true;
          right['label']=right.title
        })
      }
      obj['rights']= this.adminForm.value.rights.filter(x=>x.checked);
      obj['rights']= obj['rights'].map(x=>x.id);
      if(obj['password'] == '' || obj['password'] == null || this.adminForm.value.password == '' || this.adminForm.value.password == null) {
        delete obj['password'];
      }
      delete obj['confirmPassword'];
      this.apiService.sendRequest(this.userId ? requests.updateUser + this.userId : requests.registerUser, this.userId ? 'put' : 'post', obj).subscribe((res:any) => {
        console.log("ADMINS", res);
        this.inItForm();
        this.route.navigateByUrl('admins/list');
        if(this.userId) {
          this.message.create('success', `Admin Updated Successfully`);
        }
        else {
          this.message.create('success', `Admin Added Successfully`);
        }
      })
    }
  }

  getAllRights() {
    this.apiService.sendRequest(requests.getAllRights, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
      this.allRights= res.response.rights;
      if(this.userId){
        this.getUserById();
      }
      else{
        this.inItForm();
        this.loader=false
      }
      console.log("ALL-RIGHTS", this.allRights);
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

  rightChecked(right){
    return this.userById.rights.some(x=>x.id==right.id)
  }

  getUserById() {
    this.apiService.sendRequest(requests.getUserById + this.userId, 'get').subscribe((res:any) => {
      this.userById= res.response.admin;
      console.log("USER-BY-ID", this.userById);
      this.adminRoleId=this.userById?.rolesId
      if(this.user.user.id===this.userId) {
        this.route.navigateByUrl('admins/list');
        this.message.create('error', `Access Denied`);
      }
        this.allRights.forEach(right=>{
          right['checked']=this.userById.rights.some(x=>x.id==right.id);
          right['label']=right.title
        })
        console.log("rights enabled",this.allRights);
        this.adminForm = this.fb.group({
          name: [this.userById?.name || null, [Validators.required, Validators.minLength(3), Validators.maxLength(250), Validators.pattern('^(?:[\u0009-\u000D\u001C-\u007E\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,250}$')]],
          rolesId: [this.userById?.rolesId || null, [Validators.required]],
          userName: [this.userById?.userName || null, [Validators.required, Validators.minLength(3), Validators.maxLength(250), Validators.pattern('^(?:[a-zA-Z0-9\s!@,=%$#&*_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,250}$')]],
          password: [null, [Validators.minLength(6), Validators.maxLength(30)]],
          confirmPassword: [null, [this.confirmationValidator]],
          email: [this.userById?.email || null, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$'), Validators.required]],
          isActive: [this.userById?.isActive || false],
          rights: [this.allRights, [Validators.required]]
        });
        setTimeout(() => {
          this.loader=false
        }, 200);
    })
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.adminForm.controls.confirmPassword.updateValueAndValidity());
  }

  requiredValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } 
    else if (control.value !== this.adminForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {};
    } 
    else if (control.value !== this.adminForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  log(value: string[]): void {
    this.rightsValue= value;
    console.log("RIGHTS-ID", this.rightsValue);
  }

  onRoleChange($event: string[]): void {
    this.adminRoleId= $event;
    if(this.adminRoleId==3) {
      this.allRights.forEach(right=>{
        right['checked']=true;
        right['label']=right.title
      })
    }
    else {
      this.allRights.forEach(right=>{
        right['checked']=false;
        right['label']=right.title
      })
    }
    console.log("ADMIN-ROLE", this.adminRoleId);
  }

  cancel() {
    this.route.navigateByUrl('admins/list');
  }

}    