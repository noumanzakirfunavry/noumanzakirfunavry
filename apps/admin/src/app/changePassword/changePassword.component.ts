import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


@Component({
    templateUrl: './changePassword.component.html',
    styles: [
      `
        i {
          cursor: pointer;
        }
      `
    ]
})

export class ChangePasswordComponent implements OnInit{
    changePasswordForm: FormGroup;

    constructor(private apiService: ApiService, 
      private fb: FormBuilder, 
      private message: NzMessageService, 
      private location: Location) {}

    ngOnInit(): void {
        this.changePasswordForm = this.fb.group({
          oldPassword: [null, [Validators.required]],
          password: [null, [Validators.required, this.newPasswordValidator]],
          confirmPassword: [null, [Validators.required, this.confirmationValidator]]
        });
      }


      updateConfirmValidator(): void {
        /** wait for refresh value */
        Promise.resolve().then(() => this.changePasswordForm.controls.confirmPassword.updateValueAndValidity());
      }

      newPasswordValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
          return { required: true };
        } else if (control.value === this.changePasswordForm.controls.oldPassword.value) {
          return { confirm: true, error: true };
        }
        return {};
      };

      confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
          return { required: true };
        } else if (control.value !== this.changePasswordForm.controls.password.value) {
          return { confirm: true, error: true };
        }
        return {};
      };

      changePassword() {
        for (const i in this.changePasswordForm.controls) {
            this.changePasswordForm.controls[i].markAsDirty();
            this.changePasswordForm.controls[i].updateValueAndValidity();
          }
          if(this.changePasswordForm.valid) {
              const obj= this.changePasswordForm.value;
              delete obj['confirmPassword'];
              this.apiService.sendRequest(requests.updatePassword, 'put', obj).subscribe((res:any) => {
                  console.log("CHANGE-PASSWORD", res);
                  this.changePasswordForm.reset();
                  this.message.create('success', `Password Updated Successfully`)
              })
          }
      }

      getCaptcha(e: MouseEvent): void {
        e.preventDefault();
    }

      cancel(): void {
        this.location.back()
      }

}    