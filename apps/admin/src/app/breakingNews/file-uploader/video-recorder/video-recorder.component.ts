import { ScriptLoaderService } from '../service/scriptLoader.service';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
declare var RecordRTC: any
@Component({
  selector: 'app-vjs-recorder',
  templateUrl: 'video-recorder.component.html',
  styleUrls: ['./video-recorder.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoRecorderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('video') video: any
  @ViewChild('videoShow') videoShow: any;
  @Input() customTimer: number;
  @Output() onFileSelection: EventEmitter<any> = new EventEmitter<any>();

  private stream: MediaStream;
  private recordRTC: any
  tags = [];
  temp;
  videoLength: number;
  videoWidth = '310px'
  // see options: https://github.com/videojs/video.js/blob/mastertutorial-options.html
  @Input() options: any = {
  };
  file: File;
  selectedFile: File;
  duration: any;
  interval: any;
  totalSeconds: number = 0;
  hours: number;
  minutes: number;
  seconds: any;
  constructor(
    public utilService: ScriptLoaderService,
    private elementRef: ElementRef,
  ) {

  }
  ngAfterViewInit() {
  }
  ngOnInit() {
    this.utilService.getSettings({ params: { settingName: 'videoLength' } }).subscribe(res => {
      this.videoLength = res.videoLength;
    })
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.totalSeconds += 1;
      this.hours = Math.floor(this.totalSeconds / 3600);
      this.minutes = Math.floor(this.totalSeconds / 60 % 60);
      this.seconds = this.totalSeconds % 60;
      if (!this.customTimer && this.minutes == this.videoLength) {
        this.stopRecording();
      }else if(this.customTimer && this.totalSeconds == this.videoLength){
        this.stopRecording();
      }
    }, 1000);
  }

  resetTimer() {
    this.totalSeconds = 0
    clearInterval(this.interval);
    delete this.interval;
    this.hours = 0
    this.minutes = 0
    this.seconds = 0
  }

  errorCallback() {
    //handle error here
  }
  startRecording() {
    let mediaConstraints = {
      video: {
        width: (window.innerWidth > 600 && window.innerWidth < 1000) ? 310 : window.innerWidth < 600 ? 270 : 480
      }, audio: true
    };
    setTimeout(() => {
      navigator.mediaDevices
        .getUserMedia(mediaConstraints)
        .then(this.successCallback.bind(this), this.errorCallback.bind(this));
    }, 2000);
  }
  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }
  successCallback = (stream: MediaStream) => {
    var options = {
      // mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      videoBitsPerSecond: 11200000,
      mimeType: 'video/webm',
      bitsPerSecond: 104000
      // bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    let video: HTMLVideoElement = this.video.nativeElement;
    video.srcObject = stream;
    video.play()
    this.toggleControls();
    this.startTimer();
  }

  stopRecording() {
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
    this.resetTimer();
    setTimeout(() => {
      this.download();
    }, 2000);
  }
  processVideo(audioVideoWebMURL) {
    let recordRTC = this.recordRTC;
    var recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL(function (dataURL) { });
  }

  fileSelection(data) {
    this.selectedFile = data;
    this.onFileSelection.emit(data);
  }

  async download() {

    var blob = this.recordRTC.getBlob()
    var file = new File([blob], "recordedVideo.mp4", {
      type: 'video/mp4'
    });
    this.selectedFile = file;
    this.onFileSelection.emit({ file: this.selectedFile, recorded: true });
  }
  onfinish() {
    // this.player.on('finishRecord', function () {
    //   // the blob object contains the recorded data that
    //   // can be downloaded by the user, stored on server etc.
    //   console.log('finished recording: ', this.player.recordedData);
    // });
  }
  onMetadata(e, video) {
    console.log('metadata: ', e);
    console.log('duration: ', this.duration = video.duration);
  }
  async fileToBase64(file: File): Promise<string> {

    return new Promise(

      (resolve, reject) => {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          resolve(e.target.result);
        }
        reader.readAsDataURL(file);
      });
  }
  ngOnDestroy() {
    let recordRTC = this.recordRTC;
    if (recordRTC) {
      recordRTC.stopRecording(this.processVideo.bind(this));
      let stream = this.stream;
      stream.getAudioTracks().forEach(track => track.stop());
      stream.getVideoTracks().forEach(track => track.stop());
    }
  }
  dismiss(dada) {

  }
  uploadFile() {

  }
}