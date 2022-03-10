import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
    templateUrl: './login-3.component.html'
})

export class Login3Component implements OnInit {
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private apiService: ApiService, private route: Router) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            userName: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ]
        });
    }

    submitForm(): void {
        for (const i in this.loginForm.controls) {
            this.loginForm.controls[ i ].markAsDirty();
            this.loginForm.controls[ i ].updateValueAndValidity();
        }
        if(this.loginForm.valid) {
            const obj= this.loginForm.value;
            obj['deviceId']= '995fb498-9621-11ec-b909-0242ac120002';
            obj['deviceType']= 'DESKTOP'
            this.apiService.sendRequest(requests.login, 'post', obj).subscribe((res:any) => {
                localStorage.setItem("admin", JSON.stringify(res.response))
                console.log("LOGIN", res);
                this.route.navigateByUrl('dashboard');
            })
        }
    }

}    