import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploaderComponent } from '../file-uploader/file-uploader/file-uploader.component';
import { FileUploadModule } from '@iplab/ngx-file-upload';
// import { FileUploadIconComponent } from '@iplab/ngx-file-upload/lib/components/file-list/file-upload-icon.component';
import { SharedFileUploaderComponent } from '../file-uploader/shared-file-uploader/shared-file-uploader.component';
import { VideoRecorderComponent } from './/video-recorder/video-recorder.component';
import { LinkVideoComponent } from '../file-uploader/link-video/link-video.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScriptLoaderService } from './service/scriptLoader.service';
// import { MyVideosSelectorComponent } from '../shared/my-videos-selector/my-videos-selector.component';
import { FileUploaderService } from './service/file-uploader.service';
import { SharedModule } from '../shared/shared.module';
import { VoiceRecorderComponent } from './voice-recorder/voice-recorder.component';
import { AudioRecordingService } from './service/voiceRecordingService';
import { TempVideoComponent } from './temp-video/temp-video.component';
import { VideoRecordingService } from './service/recording.service';


@NgModule({
  declarations: [
    FileUploaderComponent,
    SharedFileUploaderComponent,
    VideoRecorderComponent,
    LinkVideoComponent,
    VoiceRecorderComponent,
    TempVideoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FileUploadModule,

  ],
  exports: [
    FileUploaderComponent,
    TempVideoComponent,
    VoiceRecorderComponent,
    SharedFileUploaderComponent,
    VideoRecorderComponent,
    LinkVideoComponent
  ],
  providers: [ScriptLoaderService,AudioRecordingService,VideoRecordingService, FileUploaderService]
})
export class FileUploaderModule { }
