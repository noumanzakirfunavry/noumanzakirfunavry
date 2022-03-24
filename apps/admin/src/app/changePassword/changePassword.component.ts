import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { requests } from '../shared/config/config';
import { ApiService } from '../shared/services/api.service';


@Component({
    templateUrl: './changePassword.component.html'
})

export class ChangePasswordComponent implements OnInit{
    changePasswordForm: FormGroup;

    constructor(private apiService: ApiService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.changePasswordForm = this.fb.group({
          oldPassword: [null, [Validators.required]],
          password: [null, [Validators.required]],
          confirmPassword: [null, [Validators.required, this.confirmationValidator]]
        });
      }


    updateConfirmValidator(): void {
        /** wait for refresh value */
        Promise.resolve().then(() => this.changePasswordForm.controls.confirmPassword.updateValueAndValidity());
      }

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
                  console.log("CHSANGE-PASSWORD", res);
                  this.changePasswordForm.reset();
              })
          }
      }

}    