import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { SharedFileUploaderComponent } from '../file-uploader/shared-file-uploader/shared-file-uploader.component';
import { FileUploaderService } from './service/file-uploader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileSelectorComponent } from './file-selector/file-selector.component';
// import { FileUploaderService } from './service/file-uploader.service';


@NgModule({
  declarations: [
    FileUploaderComponent,
    SharedFileUploaderComponent,
    FileSelectorComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    FileUploaderComponent,
    SharedFileUploaderComponent,
    FileSelectorComponent
  ],
  providers: [ FileUploaderService]
})
export class FileUploaderModule { }
