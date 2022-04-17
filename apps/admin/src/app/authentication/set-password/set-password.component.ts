import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';


@Component({
    templateUrl: './set-password.component.html'
})

export class SetPasswordComponent implements OnInit {
    setPasswordForm: FormGroup;
    token: number;

    constructor(private fb: FormBuilder,
        private activatedRoute:ActivatedRoute,
        private apiService: ApiService, 
        private route: Router, 
        private message: NzMessageService) {
    }

    ngOnInit(): void {
        this.setPasswordForm = this.fb.group({
            password: [ null, [ Validators.required, Validators.minLength(6), Validators.maxLength(30) ] ],
            confirmPassword: [ null, [ Validators.required, this.confirmationValidator ] ]
        });
        this.activatedRoute.params.subscribe(params => {
            this.token = params.token;
        })
    }

    submitForm(): void {
        for (const i in this.setPasswordForm.controls) {
            this.setPasswordForm.controls[ i ].markAsDirty();
            this.setPasswordForm.controls[ i ].updateValueAndValidity();
        }
        if(this.setPasswordForm.valid) {
            const obj= this.setPasswordForm.value;
            obj['password']= this.setPasswordForm.value.password.toLowerCase();
            delete obj['confirmPassword'];
            this.apiService.sendRequest(requests.setPassword + this.token, 'post', obj).subscribe((res:any) => {
                console.log("Password for reset password", res);
                this.setPasswordForm.reset();
                this.message.create('success', `Password reset Successfully`)
                this.route.navigateByUrl('/full/authentication/login');
            })
        }
    }

    updateConfirmValidator(): void {
        /** wait for refresh value */
        Promise.resolve().then(() => this.setPasswordForm.controls.confirmPassword.updateValueAndValidity());
      }
    
      confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
          return { required: true };
        } else if (control.value !== this.setPasswordForm.controls.password.value) {
          return { confirm: true, error: true };
        }
        return {};
      };

}    