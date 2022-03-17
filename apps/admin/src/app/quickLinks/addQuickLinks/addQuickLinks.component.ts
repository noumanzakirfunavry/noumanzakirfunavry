import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from 'src/app/shared/config/config';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
    selector: 'app-addquickLink',
    templateUrl: './addQuickLinks.component.html',
    styles: [
        `
          [nz-form]:not(.ant-form-inline):not(.ant-form-vertical) {
            max-width: 600px;
          }
        `
      ]
})

export class AddQuickLinksComponent implements OnInit {
  quickLinkForm: FormGroup;
  selectedQuickLink: any;
  quickLinkId: any;
  quickLinkById: any;
  
  constructor(private fb: FormBuilder, 
    private apiService: ApiService, 
    private activatedRoute: ActivatedRoute, 
    private message: NzMessageService
    ) {}
  
  ngOnInit(): void {
    this.quickLinkForm = this.fb.group({
      title: [ null, [ Validators.required ] ],
      url: [ null, [ Validators.required ] ],
      visible: [false]
  });
  this.activatedRoute.paramMap.subscribe((params: ParamMap | any) => {
    this.quickLinkId = + params.get('id');
    if (this.quickLinkId) {
      this.getQuickLinkById();
    }
  });
  }

  quickLink(): void {
    for (const i in this.quickLinkForm.controls) {
      this.quickLinkForm.controls[i].markAsDirty();
      this.quickLinkForm.controls[i].updateValueAndValidity();
    }
    if(this.quickLinkForm.valid) {
      const obj= this.quickLinkForm.value;
      obj['position']= 1;
      this.apiService.sendRequest(this.quickLinkId ? requests.updateQuickLink + this.quickLinkId : requests.addNewQuickLink, this.quickLinkId ? 'put' : 'post', obj).subscribe((res:any) => {
        console.log("QUICK-LINK", res);
        this.quickLinkForm.reset();
        if(this.quickLinkId) {
          this.message.create('success', `Quick Link Updated Successfully`)
        }
        else {
          this.message.create('success', `Quick Link Added Successfully`)
        }
      })
    }
  }

  getQuickLinkById() {
    this.apiService.sendRequest(requests.getQuickLinkById + this.quickLinkId, 'get').subscribe((res:any) => {
      this.quickLinkById= res.quickLinks;
      console.log("QUICK-LINK-BY-ID", this.quickLinkById);
      this.quickLinkForm = this.fb.group({
        title: [ this.quickLinkById?.title || null, [ Validators.required ] ],
        url: [ this.quickLinkById?.url || null, [ Validators.required ] ],
        visible: [this.quickLinkById?.visible || false]
    });
    })
  }

}    