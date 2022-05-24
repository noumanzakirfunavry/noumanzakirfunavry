import { Component, EventEmitter, ElementRef, OnInit, Output, ViewChild, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { MediaUtilService } from '../service/mediaUtil';

@Component({
  selector: 'dynamic-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})
export class FileSelectorComponent implements OnInit {
  @ViewChild("imageSelector") imageSelector: ElementRef;
  @Input() field: any;
  @Input() customDiv: any;
  @Input() formField: FormGroup;
  @Input() validate: any;
  @Input() title = 'File Upload';
  @Input() fileTypes = 'image/png image/jpg image/jpeg video/mp4 video/3gp video/avi video/mpeg video/mov video/webm mp4';
  @Output() onFileSelection: EventEmitter<any> = new EventEmitter<any>();
  @Output() onFileUpload:  EventEmitter<any> = new EventEmitter<any>();
  @Output() onFileRemove:  EventEmitter<any> = new EventEmitter<any>();
  
  mediaObj = { name: '', type: '', src: null };
  error: string;
  previousFile: any;
  uploadProgress: number;


  constructor(private apiService: ApiService, public mediaAssetUtil: MediaUtilService ) {}

  ngOnInit(): void {
    if (this.field) {
      this.previousFile = Object.assign({},this.field);
      // Trying to bind file on edit case
      // this.dynamicApi.getSignedUrl(this.field.properties?.fileData?.path).subscribe(async (res: any) => {
      //   let file = await this.urlToFile(res.result.linkToFile);
      //   console.log(" file from url", file);
      //   this.formField.value[this.field.colName]=file
      // })
      console.log('field',this.field);
    }
  }

  urlToFile(url: string) {
    const filename = url.substring(url.lastIndexOf('/') + 1);
    let fileExtension = filename.substr((filename.lastIndexOf('.') + 1));
    if (fileExtension == 'mp4') {
      fileExtension = 'video/mp4';
    }
    return fetch(url)
      .then(res => res.blob())
      .then(async blob => {
        return new File([blob], filename,
          { type: 'file/docx' });
      })
  }

  uploadFile() {
    this.apiService.uploadFileProgress(this.field.value, this.formField.value.description).subscribe((res: any) => {
        // saving files on upload so that no need to load from s3.

        if (res?.type == 1 && res?.loaded && res?.total) {
            this.uploadProgress = Math.round(100 * (res.loaded / res.total));
            console.log("file progress", this.uploadProgress);
        }
        else if (res?.body) {
            setTimeout(() => {
              this.mediaObj.src = res.body.response.url;
              console.log("url",this.mediaObj.src);
            }, 200);
            
            // this.newsModel.fileUrl = res.body.response.url;
           this.onFileUpload.emit(res.body.response);
            console.log("news modal with video", res.body);
        }
    })
}

  downloadResume(path) {
    // this.dynamicApi.getSignedUrl(path).subscribe((res: any) => {

    //   window.location.href = res.result.linkToFile
    // })
  }

  fileSelector() {
    const fileChooser: HTMLInputElement = document.getElementById(
      this.field.colName
    ) as HTMLInputElement;
    fileChooser.click();
  }
  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
}

  fileRead(event) {
    if (event.target.files[0] && this.fileTypes.match(event.target.files[0].type.toLowerCase())) {
      this.mediaObj.name = event.target.files[0].name;
      this.mediaObj.type = event.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/) ? 'image':'video';
      const imageFileBase64 = { imagename: '', src: '' };
      imageFileBase64.imagename = event.target.files[0].name;
      if (this.mediaObj.type.match('image')) {
        this.mediaAssetUtil.fileToBase64(event.target.files[0]).then(file => {
          // this.mediaObj.src = file;
          this.field.value = event.target.files[0];
          this.onFileSelection.emit(this.field);
        })
      } else {
        this.field.value = event.target.files[0];
        this.onFileSelection.emit(this.field);
      }
    } else {
      this.field.value = null;
      this.onFileSelection.emit(this.field);
      this.error = 'Select one file with these extensions ' + this.fileTypes;
      this.field.value = null;
      setTimeout(() => {
        this.error = null
      }, 3000);
    }
  }

  removePicture() {
    this.field.value = null;
    this.field.showDelBtn = false;
    this.uploadProgress= null;
    this.imageSelector.nativeElement.value = null;
    this.mediaObj = { name: '', src: null, type: null };
    this.onFileRemove.emit(this.field);
  }

}
