import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';


@Component({
    templateUrl: './reset-password.component.html'
})

export class ResetPasswordComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private apiService: ApiService, private route: Router) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: [ null, [ Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$') ] ]
        });
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
            obj['email']= this.loginForm.value.email.toLowerCase();
            this.apiService.sendRequest(requests.resetPassword, 'post', obj).subscribe((res:any) => {
                // localStorage.setItem("admin", JSON.stringify(res.response))
                console.log("Email for reset password", res);
                this.route.navigateByUrl('login');
            })
        }
    }

}    