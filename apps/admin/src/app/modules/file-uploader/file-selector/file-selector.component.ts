import { Component, EventEmitter, ElementRef, OnInit, Output, ViewChild, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MediaUtilService } from '../service/mediaUtil';
// import { GenericCallsService } from 'src/app/appService/generic-calls.service';
// import { MediaUtilService } from 'src/app/common/mediaUtil';

@Component({
  selector: 'dynamic-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})
export class FileSelectorComponent implements OnInit {
  @ViewChild("imageSelector") imageSelector: ElementRef;
  @Input() field: any;
  @Input() formField: FormGroup;
  @Input() validate: any;
  @Input() title = 'Image Upload';
  @Input() fileTypes = 'image/png, image/jpg, image/jpeg';
  @Output() onFileSelection: EventEmitter<any> = new EventEmitter<any>();
  mediaObj = { name: '', type: '', src: null };
  error: string;
  previousFile: any;
  constructor(
    // public dynamicApi: GenericCallsService,
    public mediaAssetUtil: MediaUtilService) { }

  ngOnInit(): void {
    if (this.field && this.field?.properties?.fileData) {
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

  fileRead(event) {

    if (event.target.files[0] && this.fileTypes.match(event.target.files[0].type.toLowerCase())) {
      this.mediaObj.name = event.target.files[0].name;
      this.mediaObj.type = event.target.files[0].type;
      const imageFileBase64 = { imagename: '', src: '' };
      imageFileBase64.imagename = event.target.files[0].name;
      if (this.mediaObj.type.match('image')) {
        this.mediaAssetUtil.fileToBase64(event.target.files[0]).then(file => {
          this.mediaObj.src = file;
          this.field.value = event.target.files[0];
          this.onFileSelection.emit(this.field);
          
        })
      } else {
        this.field.value = event.target.files[0];
        this.onFileSelection.emit(this.field);
      }
    } else {
      this.error = 'Please select one file with these extensions ' + this.fileTypes;
      setTimeout(() => {
        this.error = null
      }, 3000);
    }
  }

  removePicture() {
    // debugger
    this.imageSelector.nativeElement.value = null;
    this.mediaObj = { name: '', src: null, type: null };
    if(this.field?.properties?.fileData)
    {
      this.field.properties.fileData=null;
    }
    this.field.value=null;
    // this.field.value = this.previousFile.value ? this.previousFile.value : null
    this.onFileSelection.emit(this.field);

  }
}
