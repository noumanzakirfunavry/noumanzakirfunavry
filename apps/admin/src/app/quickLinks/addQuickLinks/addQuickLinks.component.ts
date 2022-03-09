import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  
  constructor(private fb: FormBuilder, private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.quickLinkForm = this.fb.group({
      title: [ null, [ Validators.required ] ],
      url: [ null, [ Validators.required ] ],
      visible: [false]
  });
  }

  addNewQuickLink(): void {
    for (const i in this.quickLinkForm.controls) {
      this.quickLinkForm.controls[i].markAsDirty();
      this.quickLinkForm.controls[i].updateValueAndValidity();
    }
    if(this.quickLinkForm.valid) {
      const obj= this.quickLinkForm.value;
      obj['position']= 1;
      this.apiService.sendRequest(requests.addNewQuickLink, 'post', obj).subscribe((res:any) => {
        console.log("ADD-QUICK-LINK", res);
      })
    }
  }

}    