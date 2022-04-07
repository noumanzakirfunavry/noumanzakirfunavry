import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';


@Component({
    templateUrl: './set-password.component.html'
})

export class SetPasswordComponent implements OnInit {
    loginForm: FormGroup;
    token: number;

    constructor(private fb: FormBuilder,
        private activatedRoute:ActivatedRoute,
         private apiService: ApiService, private route: Router) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            password: [ null, [ Validators.required, Validators.minLength(6), Validators.maxLength(30) ] ],
            confirmPassword: [ null, [ Validators.required, this.confirmationValidator ] ]
        });
        this.activatedRoute.params.subscribe(params => {
            this.token = params.token;
        })
    }

    submitForm(): void {
        for (const i in this.loginForm.controls) {
            this.loginForm.controls[ i ].markAsDirty();
            this.loginForm.controls[ i ].updateValueAndValidity();
        }
        if(this.loginForm.valid) {
            const obj= this.loginForm.value;
            // obj['deviceId']= '995fb498-9621-11ec-b909-0242ac120002';
            // obj['deviceType']= 'DESKTOP';
            obj['password']= this.loginForm.value.password.toLowerCase();
            delete obj['confirmPassword'];
            this.apiService.sendRequest(requests.setPassword + this.token, 'post', obj).subscribe((res:any) => {
                // localStorage.setItem("admin", JSON.stringify(res.response))
                console.log("Email for reset password", res);
                this.route.navigateByUrl('login');
            })
        }
    }

    updateConfirmValidator(): void {
        /** wait for refresh value */
        Promise.resolve().then(() => this.loginForm.controls.confirmPassword.updateValueAndValidity());
      }
    
      confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
          return { required: true };
        } else if (control.value !== this.loginForm.controls.password.value) {
          return { confirm: true, error: true };
        }
        return {};
      };

}    