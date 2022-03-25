import { Component, OnDestroy, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoRecordingService } from '../service/recording.service';
import { ScriptLoaderService } from '../service/scriptLoader.service';

@Component({
  selector: 'app-temp-video',
  templateUrl: './temp-video.component.html',
  styleUrls: ['./temp-video.component.css'],
})
export class TempVideoComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() onFileSelection: EventEmitter<any> = new EventEmitter<any>();
  @Input() customTimer: number;

  @ViewChild('videoElement') videoElement: any;
  video: any;
  isPlaying = false;
  displayControls = true;
  isVideoRecording = false;
  videoRecordedTime;
  audioBlobUrl;
  videoBlobUrl;
  videoBlob;
  videoName;
  videoStream: MediaStream;
  videoConf = { video: { width: 320 }, audio: true }
  videoLength: any;
  minutes: number;
  seconds: number;

  constructor(
    private ref: ChangeDetectorRef,
    public utilService: ScriptLoaderService,
    private videoRecordingService: VideoRecordingService,
    private sanitizer: DomSanitizer
  ) {
    setTimeout(() => {
      this.isVideoRecording=false
    }, 500);

    this.videoRecordingService.recordingFailed().subscribe(() => {
      this.isVideoRecording = false;
      this.ref.detectChanges();
    });

    this.videoRecordingService.getRecordedTime().subscribe((time) => {
      this.videoRecordedTime = time;
      this.ref.detectChanges();
    });

    this.videoRecordingService.getStream().subscribe((stream) => {
      this.videoStream = stream;
      this.ref.detectChanges();
    });

    this.videoRecordingService.getMinutes().subscribe((minutes) => {
      console.log('minutes', minutes)
      this.minutes = minutes.minutes;
      this.seconds = minutes.seconds;
      if (!this.customTimer && minutes.minutes >= this.videoLength) {
        this.stopVideoRecording();
      } else if (this.customTimer && minutes.seconds >= this.videoLength) {
        this.stopVideoRecording();
      }
    })

    this.videoRecordingService.getRecordedBlob().subscribe((data) => {
      this.videoBlob = data.blob;
      this.videoName = data.title;
      this.videoBlobUrl = this.sanitizer.bypassSecurityTrustUrl(data.url);
      this.ref.detectChanges();
    });

  }

  ngOnInit() {
    if (!this.customTimer) {
      this.utilService.getSettings({ params: { settingName: 'videoLength' } }).subscribe(res => {
        this.videoLength = res.videoLength;
      })
    } else if (this.customTimer) {
      this.videoLength = this.customTimer;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.video = this.videoElement.nativeElement;
    }, 300);
  }

  startVideoRecording() {
    if (!this.isVideoRecording) {
      this.video.controls = false;
      this.video.muted = true
      this.isVideoRecording = true;
      this.seconds = 0
      console.log('config', this.videoConf);
      this.videoRecordingService.startRecording(this.videoConf)
        .then(stream => {
          this.video.srcObject = stream;
          console.log('stream',stream);
          this.video.play();
        })
        .catch(function (err) {
          console.log(err.name + ": " + err.message);
        });
    }
  }

  stopVideoRecording() {
    if (this.isVideoRecording) {
      this.videoRecordingService.stopRecording();
      this.video.srcObject = this.videoBlobUrl;
      setTimeout(() => {
        this.isVideoRecording = false;
      }, 3000);
      this.video.controls = true;
      this.video.muted = false
    }
    setTimeout(() => {
      this.getVideoFile(this.videoBlob, 'video/mp4', this.videoName + '.mp4');
      this.minutes = null
    }, 2000);
  }

  clearVideoRecordedData() {
    this.videoBlobUrl = null;
    this.video.srcObject = null;
    this.video.controls = false;
    this.ref.detectChanges();
    this.onFileSelection.emit({ file: null })
  }

  downloadVideoRecordedData() {
    this._downloadFile(this.videoBlob, 'video/mp4', this.videoName);
  }


  clearAudioRecordedData() {
    this.videoRecordingService.abortRecording();
    this.audioBlobUrl = null;
    this.onFileSelection.emit({ file: null })

  }

  ngOnDestroy(): void {
    
    this.videoRecordingService.abortRecording();
    this.clearVideoRecordedData()
  }

  async getVideoFile(data: any, type: string, filename: string): Promise<any> {

    var file: any = await new File([this.videoBlob], "recordedVideo" + '.mp4', {
      type: 'video/mp4',
    });
    this.onFileSelection.emit({ file: file });
  }

  public blobToFile = (theBlob: Blob, filename: string): File => {
    return new File([theBlob], filename, { lastModified: new Date().getTime(), type: theBlob.type })
  }

  _downloadFile(data: any, type: string, filename: string): any {
    const blob = new Blob([data], { type: type });
    const url = window.URL.createObjectURL(blob);
    var file = new File([blob], "recordedVideo", {
      type: 'video/mp4'
    });
    console.log("OK file==>", file);
    const anchor = document.createElement('a');
    anchor.download = filename;
    anchor.href = url;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}