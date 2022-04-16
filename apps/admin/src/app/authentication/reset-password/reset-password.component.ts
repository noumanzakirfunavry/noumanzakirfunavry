import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';


@Component({
    templateUrl: './reset-password.component.html'
})

export class ResetPasswordComponent implements OnInit {
    resetPasswordForm: FormGroup;

    constructor(private fb: FormBuilder, 
        private apiService: ApiService, 
        private route: Router, 
        private message: NzMessageService) {
    }

    ngOnInit(): void {
        this.resetPasswordForm = this.fb.group({
            email: [ null, [ Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$') ] ]
        });
    }

    submitForm(): void {
        for (const i in this.resetPasswordForm.controls) {
            this.resetPasswordForm.controls[ i ].markAsDirty();
            this.resetPasswordForm.controls[ i ].updateValueAndValidity();
        }
        if(this.resetPasswordForm.valid) {
            const obj= this.resetPasswordForm.value;
            obj['email']= this.resetPasswordForm.value.email.toLowerCase();
            this.apiService.sendRequest(requests.resetPassword, 'post', obj).subscribe((res:any) => {
                console.log("Email for reset password", res);
                this.resetPasswordForm.reset();
                this.message.create('success', `Email sent Successfully`)
                // this.route.navigateByUrl('full/authentication/login');
            })
        }
    }

}    