import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
    selector: 'app-addBreakingNews',
    templateUrl: './addBreakingNews.component.html',
    styles: [
        `
          [nz-form]:not(.ant-form-inline):not(.ant-form-vertical) {
            max-width: 600px;
          }
        `
      ]
})

export class AddBreakingNewsComponent implements OnInit {
  breakingNewsForm: FormGroup;
  
    constructor(private fb: FormBuilder, private apiService: ApiService) {}
  
    ngOnInit(): void {
      this.breakingNewsForm = this.fb.group({
        title: [null, [Validators.required]],
        newsLink: [null, [Validators.required]],
        isActive: [false],
        isPushNotificationActive: [false],
        IsTwitterActive: [false],
        isFacebookActive: [false]
      });
    }

    breakingNews() {
      for (const i in this.breakingNewsForm.controls) {
        this.breakingNewsForm.controls[i].markAsDirty();
        this.breakingNewsForm.controls[i].updateValueAndValidity();
      }
      if(this.breakingNewsForm.valid) {
        const obj= this.breakingNewsForm.value;
        obj['newsId']= 1;
        this.apiService.sendRequest(requests.addBreakingNews, 'post', obj).subscribe((res:any) => {
          console.log("ADD-BREAKING-NEWS", res);
        })
      }
    }

    enableDisable(e?: MouseEvent) {
      this.breakingNewsForm.value.isPushNotificationActive= !this.breakingNewsForm.value.isPushNotificationActive; 
      console.log("PUSH-NOTIF", this.breakingNewsForm.value.isPushNotificationActive);
      e.preventDefault();
           
    }

}  