import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { CommonStore } from 'src/app/store/common.store';
// import { S3FilesStore } from 'src/app/store/signedFiles.store';
import { FileUploaderService } from './../service/file-uploader.service';

@Component({
  selector: 'shared-file-uploader',
  templateUrl: './shared-file-uploader.component.html',
  styleUrls: ['./shared-file-uploader.component.css']
})
export class SharedFileUploaderComponent implements OnInit {
  tabs = [
    { flag: 'upload', label: 'Upload File' },
    { flag: 'record', label: 'Record Video' },
    { flag: 'link', label: 'Link Media' },
    { flag: 'voice', label: 'Record Voice' },
    { flag: 'mine', label: 'Select From Uploaded' }]
  selectedTab: 'upload' | 'record' | 'link' | 'mine' | 'voice'

  file: any;
  fileType: 'file' | 'link' | 'fileId';

  @Input() title:string='Upload File';
  @Input() size:number;
  @Output() onFileSelection: EventEmitter<any> = new EventEmitter<any>();
  @Output() closeFileUploader: EventEmitter<any> = new EventEmitter<any>();
  @Input() allowedFileSources: { voice:boolean,record: boolean, link: boolean, upload: boolean, mine: boolean } = { record: true, link: true, upload: true, mine: false,voice:false }
  @Input() fileTypes: any = 'video/mp4';
  @Input() btnLable:string='Upload';
  @Input() maxDuration:number=null;
  uploading: boolean;
  isRecodedFile: any;
  errorToShow: string;
  uploadProgress: number;
  constructor(
    public fileUploadService: FileUploaderService,
    // private commonStore:CommonStore,
    // public s3FilesStore: S3FilesStore
    ) { }


  ngOnInit(): void {
    if(this.allowedFileSources.upload){
      this.selectedTab='upload'
    }else if(this.allowedFileSources.voice){
      this.selectedTab='voice'
    }
  }

  onSelectTab(selectedTab) {
    this.selectedTab = selectedTab;
  }

  fileSelection(fileObject) {
 
    this.isRecodedFile=fileObject.recorded ? fileObject.recorded:false;
    if (fileObject.file) {
      this.fileType = 'file';
      this.file = fileObject.file;
    } else if (fileObject.link) {
      this.fileType = 'link';
      this.file = fileObject.link;
    } else if (fileObject.fileId) {
      this.fileType = 'fileId';
      this.file = fileObject.fileId;
    }else{
      this.file=null
    }
  }

  uploadFile() {
    this.uploading=true
    // http://54.227.155.120:5000/profileVideos/1609330122857.mp4
    if (this.file && this.fileType == 'file') {
      this.fileUploadService.uploadFileProgress(this.file,this.isRecodedFile).subscribe((res: any) => {
        // saving files on upload so that no need to load from s3.
        
        if(res?.type == 1 && res?.loaded && res?.total){
          this.uploadProgress = Math.round(100 * (res.loaded / res.total));
          console.log("file progress",this.uploadProgress);
        }
        else if(res?.body){
          console.log("Data Uploaded");
          console.log(res.body);
          this.isRecodedFile=false;
          // this.s3FilesStore.insertFile(res.body.result.signedURL, res.body.result.key, res.body.result.fileId)
          this.onFileSelection.emit(res.body.result.fileId);
          this.uploading=false
        }

      })
    } else if (this.file && this.fileType == 'link') {
      this.fileUploadService.uploadLink({ link: this.file, date: new Date() }).subscribe((res: any) => {
        this.onFileSelection.emit(res.result.id);
        this.uploading=false
      })
    } else if (this.file && this.fileType == 'fileId') {
      this.onFileSelection.emit(this.file);
      this.uploading=false
    }else{
      this.errorToShow='Please select or record again the media';
      setTimeout(() => {
        this.errorToShow=null;
        this.uploading=false
      }, 4000);
    }
  }
  onClose(reason) {
    this.closeFileUploader.emit(reason);
  }

}
