import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { filter } from 'rxjs';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
    selector: 'app-addPresenters',
    templateUrl: './addPresenters.component.html',
    styles: [
        `
          [nz-form]:not(.ant-form-inline):not(.ant-form-vertical) {
            max-width: 600px;
          }
        `
      ]
})

export class AddPresentersComponent implements OnInit{

    public Editor = ClassicEditor;
    validateForm: FormGroup;
    uploading = false;
    fileList: NzUploadFile[] = [];

  
    constructor(private fb: FormBuilder, private http: HttpClient, private msg: NzMessageService) {}
  
    ngOnInit(): void {
      this.validateForm = this.fb.group({
        formLayout: ['horizontal'],
        fieldA: [null, [Validators.required]],
        filedB: [null, [Validators.required]]
      });
    }

    submitForm(): void {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  
    get isHorizontal(): boolean {
      return this.validateForm.controls.formLayout?.value === 'horizontal';
    }

    beforeUpload = (file: NzUploadFile): boolean => {
      this.fileList = this.fileList.concat(file);
      return false;
    };
  
    handleUpload(): void {
      const formData = new FormData();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.fileList.forEach((file: any) => {
        formData.append('files[]', file);
      });
      this.uploading = true;
      // You can use any AJAX library you like
      const req = new HttpRequest('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
        // reportProgress: true
      });
      this.http
        .request(req)
        .pipe(filter(e => e instanceof HttpResponse))
        .subscribe(
          () => {
            this.uploading = false;
            this.fileList = [];
            this.msg.success('upload successfully.');
          },
          () => {
            this.uploading = false;
            this.msg.error('upload failed.');
          }
        );
    }
    
}      