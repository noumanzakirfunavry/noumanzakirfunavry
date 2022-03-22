import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';

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
  adminForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.inItForm();
  }

  inItForm() {
    this.adminForm = this.fb.group({
      name: [null, [Validators.required]],
      roleId: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required, this.confirmationValidator]],
      email: [null, [Validators.email, Validators.required]],
      isActive: [false]
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
      delete obj['confirmPassword'];
      this.apiService.sendRequest(requests.registerUser, 'post', obj).subscribe((res:any) => {
        console.log("ADMINS", res);
        this.inItForm();
      })
    }
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