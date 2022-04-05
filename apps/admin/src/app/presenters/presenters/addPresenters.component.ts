import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { filter } from 'rxjs';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { requests } from '../../shared/config/config';
import { environment } from '../../../environments/environment';

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
    presenterForm: FormGroup;
    uploading = false;
    presenterId: number;
    presenterById: any;
    fileList: NzUploadFile[] = [];
    file: any;
    uploadProgress: number;
    imageId: any;
    imagePath: any;

  
    constructor(private fb: FormBuilder, 
      private http: HttpClient, 
      private msg: NzMessageService, 
      private apiService: ApiService, 
      private route: Router, 
      private activatedRoute: ActivatedRoute, 
      private message: NzMessageService) {}
  
    ngOnInit(): void {
      this.presenterForm = this.fb.group({
        name: [null, [Validators.required]],
        jobPosition: [null, [Validators.required]],
        age: [null, [Validators.required]],
        gender: [null, [Validators.required]],
        dob: [null, [Validators.required]],
        joinedNetworkOn: [null, [Validators.required]],
        description: [null],
        attachmentsId: [null, [Validators.required]],
        twitterLink: [null, [Validators.required]],
        facebookLink: [null, [Validators.required]],
        instagramLink: [null, [Validators.required]],
        linkedInLink: [null, [Validators.required]],
        isActive: [false]
      });
      this.activatedRoute.paramMap.subscribe((params: ParamMap | any) => {
        this.presenterId = + params.get('id');
        if (this.presenterId) {
          this.getPresenterById();
        }
      });
    }

    presenters(): void {
      for (const i in this.presenterForm.controls) {
        this.presenterForm.controls[i].markAsDirty();
        this.presenterForm.controls[i].updateValueAndValidity();
      }
      this.apiService.uploadFileProgress(this.file).subscribe((res:any) => {
        
        if (res?.type == 1 && res?.loaded && res?.total) {
          this.uploadProgress = Math.round(100 * (res.loaded / res.total));
          console.log("file progress", this.uploadProgress);
      }
      else if (res?.body) {
        console.log("Data Uploaded");
        console.log(res.body);
        this.imageId = res.body.response.id;
        this.imagePath = environment.fileUrl + res.body.response.path;
        console.log("IMAGE-ID", this.imageId);
        if(this.presenterForm.valid) {
          const obj= this.presenterForm.value;
          obj['age']= parseInt(this.presenterForm.value.age);
          obj['attachmentsId']= this.imageId;
          this.apiService.sendRequest(this.presenterId ? requests.updatePresenter + this.presenterId : requests.addPresenter, this.presenterId ? 'put' : 'post', obj).subscribe((res:any) => {
            console.log("ADD-PRESENTERS", res);
            this.presenterForm.reset();
            this.route.navigateByUrl('presenters/list');
            if(this.presenterId) {
              this.message.create('success', `Presenter Updated Successfully`)
            }
            else {
              this.message.create('success', `Presenter Added Successfully`)
            }
          })
      }    
    }
  })
    }

    getPresenterById() {
      this.apiService.sendRequest(requests.getPresenterById + this.presenterId, 'get').subscribe((res:any) => {
        this.presenterById= res.response.presenter;
        console.log("GET-PRESENTER-BY-ID", this.presenterById);
        this.presenterForm = this.fb.group({
          name: [this.presenterById?.name || null, [Validators.required]],
          jobPosition: [this.presenterById?.jobPosition || null, [Validators.required]],
          age: [this.presenterById?.age || null, [Validators.required]],
          gender: [this.presenterById?.gender || null, [Validators.required]],
          dob: [this.presenterById?.dob || null, [Validators.required]],
          joinedNetworkOn: [this.presenterById?.joinedNetworkOn || null, [Validators.required]],
          description: [this.presenterById?.description || null],
          attachmentsId: [this.presenterById?.attachmentsId || null, [Validators.required]],
          twitterLink: [this.presenterById?.twitterLink || null, [Validators.required]],
          facebookLink: [this.presenterById?.facebookLink || null, [Validators.required]],
          instagramLink: [this.presenterById?.instagramLink || null, [Validators.required]],
          linkedInLink: [this.presenterById?.linkedInLink || null, [Validators.required]],
          isActive: [this.presenterById?.isActive || false]
        });
      })
    }

    getCaptcha(e: MouseEvent): void {
      e.preventDefault();
  }

  fileImage(e: any) {
    console.log(e);
    this.file= e.value;
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

    cancel() {
      this.route.navigateByUrl('presenters/list');
    }
    
}      