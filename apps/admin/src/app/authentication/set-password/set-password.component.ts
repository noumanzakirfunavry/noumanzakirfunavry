import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
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
            password: [ null, [ Validators.required, Validators.maxLength(30) ] ]
        });
        this.activatedRoute.params.subscribe(params => {
            debugger
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
            debugger
            this.apiService.sendRequest(requests.setPassword+this.token, 'post', obj).subscribe((res:any) => {
                // localStorage.setItem("admin", JSON.stringify(res.response))
                console.log("Email for reset password", res);
                this.route.navigateByUrl('login');
            })
        }
    }

}    