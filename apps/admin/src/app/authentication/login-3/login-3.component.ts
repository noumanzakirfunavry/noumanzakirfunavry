import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
    templateUrl: './login-3.component.html'
})

export class Login3Component implements OnInit {
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private apiService: ApiService) {
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
            this.apiService.sendRequest('http://localhost:3333/api/authentication/login', 'post', obj).subscribe((res:any) => {
                console.log("LOGIN", res);
            })
        }
    }

}    