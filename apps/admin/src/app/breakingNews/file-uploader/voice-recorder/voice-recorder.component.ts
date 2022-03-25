import { Component, OnDestroy, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, Output, EventEmitter, AfterViewInit, Input } from '@angular/core';

// import { VideoRecordingService } from './video-recording.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ScriptLoaderService } from '../service/scriptLoader.service';
import { AudioRecordingService } from '../service/voiceRecordingService';

@Component({
  selector: 'app-voice-recorder',
  templateUrl: './voice-recorder.component.html',
  styleUrls: ['./voice-recorder.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class VoiceRecorderComponent implements OnDestroy, OnInit, AfterViewInit {

  // @ViewChild('videoElement') videoElement: any;
  // video: any;
  isPlaying = false;
  displayControls = true;
  isAudioRecording = false;
  isVideoRecording = false;
  audioRecordedTime;
  // videoRecordedTime;
  audioBlobUrl;
  videoBlobUrl;
  audioBlob;
  // videoBlob;
  audioName;
  // videoName;
  audioStream;
  // videoStream: MediaStream;
  audioConf = { audio: true }
  @Input() customTimer: number
  @Output() onFileSelection: EventEmitter<any> = new EventEmitter<any>();
  @Input() title:string;
  selectedFile: any;
  minutes: number;
  seconds: number;
  audioLength: number;
  // videoConf = { video: { facingMode:"user", width: 320 }, audio: true}

  constructor(
    private ref: ChangeDetectorRef,
    private audioRecordingService: AudioRecordingService,
    public utilService: ScriptLoaderService,
    // private videoRecordingService: VideoRecordingService,
    private sanitizer: DomSanitizer
  ) {

    console.log('title',this.title);
    this.audioRecordingService.recordingFailed().subscribe(() => {
      this.isAudioRecording = false;
      this.ref.detectChanges();
    });
    this.audioRecordingService.getMinutes().subscribe((minutes) => {
      console.log('minutes', minutes)
      this.minutes = minutes.minutes;
      this.seconds = minutes.seconds;
      if (!this.customTimer && minutes.minutes >= this.audioLength) {
        this.stopAudioRecording();
      } else if (this.customTimer && minutes.seconds >= this.audioLength) {
        this.stopAudioRecording();
      }
    })

    this.audioRecordingService.getRecordedTime().subscribe((time) => {
      this.audioRecordedTime = time;
      this.ref.detectChanges();
    });

    this.audioRecordingService.getRecordedBlob().subscribe((data) => {
      this.audioBlob = data.blob;
      this.audioName = data.title;
      this.audioBlobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
      this.ref.detectChanges();
    });
  }

  ngOnInit() {
    if (!this.customTimer) {
      this.utilService.getSettings({ params: { settingName: 'videoLength' } }).subscribe(res => {
        this.audioLength = res.videoLength;
      })
    } else if (this.customTimer) {
      this.audioLength = this.customTimer;
    }
  }
  ngAfterViewInit() {
    // removed by client
    // this.startAudioRecording()
  }



  startAudioRecording() {
    if (!this.isAudioRecording) {
      this.isAudioRecording = true;
      this.seconds = 0;

      this.audioRecordingService.startRecording();
    }
  }

  abortAudioRecording() {
    if (this.isAudioRecording) {
      this.isAudioRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }

  stopAudioRecording() {
    if (this.isAudioRecording) {
      this.audioRecordingService.stopRecording();
      setTimeout(() => {
        this.downloadAudioRecordedData()
      }, 1000);
      setTimeout(() => {
        this.isAudioRecording = false;
      }, 2000);
    }
  }

  clearAudioRecordedData() {
    this.audioBlobUrl = null;
    this.onFileSelection.emit({ file: null });

  }

  downloadAudioRecordedData() {
    this._downloadFile(this.audioBlob, 'audio/mp3', this.audioName);
  }

  ngOnDestroy(): void {
    this.abortAudioRecording();
  }

  _downloadFile(data?: any, type?: string, filename?: string): any {
    // var file = new File([this.audioBlob], "audio"+Math.random(), {
    //   type: 'audio/mp3'
    // });
    // this.selectedFile = file;
    // this.onFileSelection.emit({ file: this.selectedFile });
    // const blob = new Blob([data], { type: type });
    // var blob = this.recordRTC.getBlob()
    var file = new File([this.audioBlob], filename, {
      type: 'audio/mp3'
    });
    //  var file = new File([blob], "audio"+Math.random(), {
    //   type: 'audio/mp3'
    // });
    // const url = window.URL.createObjectURL(blob);
    //     this.selectedFile = blob;
    this.onFileSelection.emit({ file: file });
    //this.video.srcObject = stream;
    //const url = data;
    // const anchor = document.createElement('a');
    // anchor.download = filename;
    // anchor.href = url;
    // document.body.appendChild(anchor);
    // anchor.click();
    // document.body.removeChild(anchor);
  }
}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-voice-recorder',
//   templateUrl: './voice-recorder.component.html',
//   styleUrls: ['./voice-recorder.component.css']
// })
// export class VoiceRecorderComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
