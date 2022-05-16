import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiService } from '../../shared/services/api.service';
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
  @ViewChild('myInput') myInputVariable: ElementRef;
    public Editor = ClassicEditor;
    presenterForm: FormGroup;
    uploading = false;
    presenterId: number;
    presenterById: any;
    file: any;
    uploadProgress: number;
    imageId: any;
    imagePath: any;
    loader= true;
    isLoading= false;

  
    constructor(private fb: FormBuilder, 
      private apiService: ApiService, 
      private route: Router, 
      private activatedRoute: ActivatedRoute, 
      private message: NzMessageService) {}
  
    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params: ParamMap | any) => {
        this.presenterId = + params.get('id');
        if (this.presenterId) {
          this.getPresenterById();
        }
        else {
          this.initForm();
          setTimeout(() => {
            this.loader=false
          }, 200);
        }
      });
    }

    initForm() {
      this.presenterForm = this.fb.group({
        name: [null, [Validators.required]],
        jobPosition: [null, [Validators.required]],
        age: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
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
    }

    uploadFile() {
      this.apiService.uploadFileProgress(this.file).subscribe((res:any) => { 
        if (res?.type == 1 && res?.loaded && res?.total) {
          this.uploadProgress = Math.round(100 * (res.loaded / res.total));
          console.log("file progress", this.uploadProgress);
        }
        else if (res?.body) {
          console.log("Data Uploaded", res.body);
            this.imageId = res.body.response.id;
            this.imagePath = environment.fileUrl + res.body.response.path;
            console.log("IMAGE-ID", this.imageId);  
        }
    })
  }

    fileRead($event) {
      this.file = $event.target.files[0];
  }

    presenters(): void {
      for (const i in this.presenterForm.controls) {
        this.presenterForm.controls[i].markAsDirty();
        this.presenterForm.controls[i].updateValueAndValidity();
      }   
      if(this.presenterForm.valid) {
        this.isLoading= true;
        setTimeout(() => {
          this.isLoading= false;
        }, 2000);
      const obj= this.presenterForm.value;
      obj['age']= parseInt(this.presenterForm.value.age);
      obj['attachmentsId']= this.imageId;
      this.apiService.sendRequest(this.presenterId ? requests.updatePresenter + this.presenterId : requests.addPresenter, this.presenterId ? 'put' : 'post', obj).subscribe((res: any) => {
        console.log("ADD-PRESENTERS", res);
        this.presenterForm.reset();
        this.route.navigateByUrl('presenters/list');
        if (this.presenterId) {
          this.message.create('success', `Presenter Updated Successfully`);
        }
        else {
          this.message.create('success', `Presenter Added Successfully`);
        }
      });
    }  
  }

    getPresenterById() {
      this.apiService.sendRequest(requests.getPresenterById + this.presenterId, 'get').subscribe((res:any) => {
        this.presenterById= res.response.presenter;
        console.log("GET-PRESENTER-BY-ID", this.presenterById);
        this.presenterForm = this.fb.group({
          name: [this.presenterById?.name || null, [Validators.required]],
          jobPosition: [this.presenterById?.jobPosition || null, [Validators.required]],
          age: [this.presenterById?.age || null, [Validators.required, Validators.pattern("^[0-9]*$")]],
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
        setTimeout(() => {
          this.loader=false
        }, 200);
      })
    }

    reset() {
      this.file= null;
      this.imageId= null;
      this.imagePath= null;
      this.uploadProgress= null;
      this.myInputVariable.nativeElement.value = "";
  }

    getCaptcha(e: MouseEvent): void {
      e.preventDefault();
  }

  //   fileImage(e: any) {
  //     console.log(e);
  //     this.file= e.value;
  // }

    cancel() {
      this.route.navigateByUrl('presenters/list');
  }
    
}      