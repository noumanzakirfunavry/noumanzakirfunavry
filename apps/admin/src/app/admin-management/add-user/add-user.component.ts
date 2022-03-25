import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Pagination } from '../../common/models/pagination';
// import { Pagination } from 'src/app/common/models/pagination';
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
  // styleUrls:['./addTag.scss']
})

export class AddUserComponent implements OnInit{
  pagination : Data = new Data();
  adminForm: FormGroup;
  allRights: any;
  userId: number;
  userById: any;

  constructor(private fb: FormBuilder, 
    private apiService: ApiService, 
    private activatedRoute: ActivatedRoute, 
    private message: NzMessageService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap | any) => {
      this.userId = + params.get('id');
      if (this.userId) {
        this.getUserById();
      }
    });
    this.inItForm();
    this.getAllRights();
  }

  inItForm() {
    this.adminForm = this.fb.group({
      name: [null, [Validators.required]],
      rolesId: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required, this.confirmationValidator]],
      email: [null, [Validators.email, Validators.required]],
      isActive: [false],
      rights: [null]
    });
  }

  admin() {
    for (const i in this.adminForm.controls) {
      this.adminForm.controls[i].markAsDirty();
      this.adminForm.controls[i].updateValueAndValidity();
    }
    if(this.adminForm.valid) {
      const obj= this.adminForm.value;
      obj['isProUser']= false;
      obj['rights']= [1];
      // obj['rights']= [this.adminForm.value.rights];
      delete obj['confirmPassword'];
      this.apiService.sendRequest(requests.registerUser, 'post', obj).subscribe((res:any) => {
        console.log("ADMINS", res);
        this.inItForm();
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

  getUserById() {
    this.apiService.sendRequest(requests.getUserById + this.userId, 'get').subscribe((res:any) => {
      this.userById= res.response.admin;
      console.log("USER-BY-ID", this.userById);
      this.adminForm = this.fb.group({
        name: [this.userById?.name || null, [Validators.required]],
        rolesId: [this.userById?.rolesId || null, [Validators.required]],
        userName: [this.userById?.userName || null, [Validators.required]],
        password: [this.userById?.password || null, [Validators.required]],
        confirmPassword: [this.userById?.password || null, [Validators.required, this.confirmationValidator]],
        email: [this.userById?.email || null, [Validators.email, Validators.required]],
        isActive: [this.userById?.isActive || false],
        rights: [this.userById?.rights || null]
      });
    })
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.adminForm.controls.confirmPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.adminForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  log(value: string[]): void {
    console.log(value);
  }
}    