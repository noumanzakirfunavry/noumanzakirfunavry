import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';

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
  breakingNewsId: number;
  breakingNewsById: any;
  loader= true;
  isLoading= false;
  
    constructor(private fb: FormBuilder, 
      private apiService: ApiService, 
      private activatedRoute: ActivatedRoute, 
      private message: NzMessageService, 
      private route: Router
      ) {}
  
    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params: ParamMap | any) => {
        this.breakingNewsId = + params.get('id');
        if (this.breakingNewsId) {
          this.getBreakingNewsById();
        }
        else {
          this.inItForm();
          setTimeout(() => {
            this.loader=false
          }, 200);
        }
      });
      
    }

    inItForm() {
      this.breakingNewsForm = this.fb.group({
        title: [null, [Validators.required]],
        newsLink: [null, [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
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
        this.isLoading= true;
        const obj= this.breakingNewsForm.value;
        obj['newsId']= 1;
        this.apiService.sendRequest(this.breakingNewsId ? requests.updateBreakingNews + this.breakingNewsId : requests.addBreakingNews, this.breakingNewsId ? 'put' : 'post', obj).subscribe((res:any) => {
          console.log("ADD-BREAKING-NEWS", res);
          this.inItForm();
          this.route.navigateByUrl('breakingNews/list');
          setTimeout(() => {
            this.isLoading= false;
          }, 2000);
          if(this.breakingNewsId) {
            this.message.create('success', `Breaking News Updated Successfully`);
          }
          else {
            this.message.create('success', `Breaking News Added Successfully`);
          }
        })
      }
    }

    getBreakingNewsById() {
      this.apiService.sendRequest(requests.getBreakingNewsById + this.breakingNewsId, 'get').subscribe((res:any) => {
        this.breakingNewsById= res.breakingNews;
        console.log("BREAKING-NEWS-BY-ID", res);
        this.breakingNewsForm = this.fb.group({
          title: [this.breakingNewsById?.title || null, [Validators.required]],
          newsLink: [this.breakingNewsById?.newsLink || null, [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
          isActive: [this.breakingNewsById?.isActive || false],
          isPushNotificationActive: [this.breakingNewsById?.isPushNotificationActive || false],
          IsTwitterActive: [this.breakingNewsById?.IsTwitterActive || false],
          isFacebookActive: [this.breakingNewsById?.isFacebookActive || false]
        });
        setTimeout(() => {
          this.loader=false
        }, 200);
      })
    }

    enableDisable(e?: MouseEvent) {
      // this.breakingNewsForm.value.isPushNotificationActive= !this.breakingNewsForm.value.isPushNotificationActive; 
      // console.log("PUSH-NOTIF", this.breakingNewsForm.value.isPushNotificationActive);
      e.preventDefault();
    }

    cancel() {
      this.route.navigateByUrl('breakingNews/list');
    }

}  