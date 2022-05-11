import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';

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
        this.tagId = + params.get('id');
        if (this.tagId) {
          this.getTagById();
        }
        else {
          this.initForm()
          setTimeout(() => {
            this.loader=false
          }, 200);
        }
      });
    }

    initForm() {
      this.tagsForm = this.fb.group({
        // title: [null, [Validators.required, Validators.pattern('[a-zA-Z0-9_-]*$')]],
        // title: [null, [Validators.required, Validators.pattern('^(?:[\u0009-\u000D\u001C-\u007E\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,250}$')]],
        title: [null, [Validators.required]],
        isActive: [false]
      });
    }

    tags(): void {
      for (const i in this.tagsForm.controls) {
        this.tagsForm.controls[i].markAsDirty();
        this.tagsForm.controls[i].updateValueAndValidity();
      }
      if(this.tagsForm.valid) {
        this.isLoading= true;
        const obj= this.tagsForm.value;
        obj['title']= this.tagsForm.value.title.trim();
        this.apiService.sendRequest(this.tagId ? requests.updateTag + this.tagId : requests.addNewTag, this.tagId ? 'put' : 'post', obj).subscribe((res:any) => {
          console.log("TAGS", res);
          this.tagsForm.reset();
          this.route.navigateByUrl('tags/list');
          setTimeout(() => {
            this.isLoading= false;
          }, 2000)
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
          // title: [this.tagById?.title || null, [Validators.required, Validators.pattern('[a-zA-Z0-9_-]*$')]],
          // title: [this.tagById?.title || null, [Validators.required, Validators.pattern('^(?:[\u0009-\u000D\u001C-\u007E\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,250}$')]],
          title: [this.tagById?.title || null, [Validators.required]],
          isActive: [this.tagById?.isActive || false]
        });
        setTimeout(() => {
          this.loader=false
        }, 200);
      })
    }

    cancel() {
      this.route.navigateByUrl('tags/list');
    }
}    