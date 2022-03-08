import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { filter } from 'rxjs';

@Component({
    selector: 'add-infographics',
    templateUrl: './add-infographics.component.html'
})

export class AddInfographicsComponent {

    validateForm: FormGroup;
    uploading = false;
    fileList: NzUploadFile[] = [];
    listOfOption: Array<{ label: string; value: string }> = [];
    size = 'default';
    singleValue = 'a10';
    multipleValue = ['a10', 'c12'];
    tagValue = ['a10', 'c12', 'tag'];

    editorConfig = {
      toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }],               
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'size': ['small', false, 'large', 'huge'] }],  
          [{ 'align': [] }],
          ['link', 'image'] ,

          [{ 'direction': 'rtl' }], 
          [{ 'font': [] }],
          [{ 'align': [] }],
      ]
  };

    submitForm(): void {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  
    get isHorizontal(): boolean {
      return this.validateForm.controls.formLayout?.value === 'horizontal';
    }
  
    constructor(private fb: FormBuilder, private http: HttpClient, private msg: NzMessageService) {}
  
    ngOnInit(): void {
      this.validateForm = this.fb.group({
        formLayout: ['horizontal'],
        fieldA: [null, [Validators.required]],
        filedB: [null, [Validators.required]]
      });
      const children: Array<{ label: string; value: string }> = [];
      for (let i = 10; i < 36; i++) {
        children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
      }
      this.listOfOption = children;
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