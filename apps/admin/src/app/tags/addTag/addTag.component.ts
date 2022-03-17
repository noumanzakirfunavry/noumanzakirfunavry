import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
    selector: 'app-addTag',
    templateUrl: './addTag.component.html',
    styles: [
        `
          [nz-form]:not(.ant-form-inline):not(.ant-form-vertical) {
            max-width: 600px;
          }
        `
      ]
})

export class AddTagComponent implements OnInit {
  tagsForm: FormGroup;
  tagId: any;
  tagById: any;


    constructor(private fb: FormBuilder, 
      private apiService: ApiService, 
      private activatedRoute: ActivatedRoute, 
      private message: NzMessageService
      ) {}
  
    ngOnInit(): void {
      this.tagsForm = this.fb.group({
        title: [null, [Validators.required]],
        isActive: [false]
      });
      this.activatedRoute.paramMap.subscribe((params: ParamMap | any) => {
        this.tagId = + params.get('id');
        if (this.tagId) {
          this.getTagById();
        }
      });
    }

    tags(): void {
      for (const i in this.tagsForm.controls) {
        this.tagsForm.controls[i].markAsDirty();
        this.tagsForm.controls[i].updateValueAndValidity();
      }
      if(this.tagsForm.valid) {
        this.apiService.sendRequest(this.tagId ? requests.updateTag + this.tagId : requests.addNewTag, this.tagId ? 'put' : 'post', this.tagsForm.value).subscribe((res:any) => {
          console.log("TAGS", res);
          this.tagsForm.reset();
          if(this.tagId) {
            this.message.create('success', `Tag Updated Successfully`)
          }
          else {
            this.message.create('success', `Tag Added Successfully`)
          }
        })
      }
    }

    getTagById() {
      this.apiService.sendRequest(requests.getTagById + this.tagId, 'get').subscribe((res:any) => {
        this.tagById= res.tags;
        console.log("TAG-BY-ID", this.tagById);
        this.tagsForm = this.fb.group({
          title: [this.tagById?.title || null, [Validators.required]],
          isActive: [this.tagById?.isActive || false]
        });
      })
    }
}    