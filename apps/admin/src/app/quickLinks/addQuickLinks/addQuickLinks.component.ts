import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';
import { WhiteSpaceValidator } from '../../shared/services/whiteSpaceValidator';

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
      this.quickLinkId = + params.get('id');
      if (this.quickLinkId) {
        this.getQuickLinkById();
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
    this.quickLinkForm = this.fb.group({
      title: [ null, [ Validators.required,  Validators.minLength(3), Validators.maxLength(250), WhiteSpaceValidator.noWhitespaceValidator ] ],
      url: [ null, [ Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w !@#$%^&*()+=;:<>?.-]*/?') ] ],
      visible: [false]
  });
  }

  quickLink(): void {
    for (const i in this.quickLinkForm.controls) {
      this.quickLinkForm.controls[i].markAsDirty();
      this.quickLinkForm.controls[i].updateValueAndValidity();
    }
    if(this.quickLinkForm.valid) {
      this.isLoading= true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      const obj= this.quickLinkForm.value;
      obj['title'] = this.quickLinkForm.value.title.trim();
      obj['position']= 1;
      this.apiService.sendRequest(this.quickLinkId ? requests.updateQuickLink + this.quickLinkId : requests.addNewQuickLink, this.quickLinkId ? 'put' : 'post', obj).subscribe((res:any) => {
        console.log("QUICK-LINK", res);
        this.quickLinkForm.reset();
        this.route.navigateByUrl('quickLinks/list');
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
        title: [ this.quickLinkById?.title || null, [ Validators.required,  Validators.minLength(3), Validators.maxLength(250), WhiteSpaceValidator.noWhitespaceValidator ] ],
        url: [ this.quickLinkById?.url || null, [ Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w !@#$%^&*()+=;:<>?.-]*/?') ] ],
        visible: [this.quickLinkById?.visible || false]
    });
    setTimeout(() => {
      this.loader=false
    }, 200);
    })
  }

  cancel() {
    this.route.navigateByUrl('quickLinks/list');
  }

}    