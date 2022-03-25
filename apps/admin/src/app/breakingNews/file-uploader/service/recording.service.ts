import { Injectable, NgZone } from '@angular/core';
declare var RecordRTC:any;
import * as moment from "moment";
import { Observable, Subject } from 'rxjs';

interface RecordedVideoOutput {
  blob: Blob;
  url: string;
  title: string;
}

@Injectable()
export class VideoRecordingService {

  private stream;
  private recorder;
  private interval;
  private startTime;
  private _stream = new Subject<MediaStream>();
  private _recorded = new Subject<RecordedVideoOutput>();
  private _recordedUrl = new Subject<string>();
  private _recordingTime = new Subject<string>();
  private _minutes = new Subject<{minutes:number,seconds:number}>();
  private _recordingFailed = new Subject<string>();


  getMinutes(): Observable<{minutes:number,seconds:number}> {
    return this._minutes.asObservable();
  }
  getRecordedUrl(): Observable<string> {
    return this._recordedUrl.asObservable();
  }
  
  getRecordedBlob(): Observable<RecordedVideoOutput> {
    return this._recorded.asObservable();
  }

  getRecordedTime(): Observable<string> {
    return this._recordingTime.asObservable();
  }

  recordingFailed(): Observable<string> {
    return this._recordingFailed.asObservable();
  }

  getStream(): Observable<MediaStream> {
    return this._stream.asObservable();
  }

  startRecording( conf: any ): Promise<any> {
    var browser = <any>navigator;
    console.log('brow',browser);
    console.log('recod',this.recorder);
    if (this.recorder) {
      // It means recording is already started or it is already recording something
      return;
    }

    this._recordingTime.next('00:00');
    return new Promise((resolve, reject) => {
      browser.mediaDevices.getUserMedia(conf).then(stream => {
        this.stream = stream;
        this.record();
        resolve(this.stream);
      }).catch(error => {

        this._recordingFailed.next();
        reject;
      });
    });
  }

  abortRecording() {
    this.stopMedia();
  }

  private record() {
    this.recorder = new RecordRTC(this.stream, {
      type: 'video',
      // latest support type don't change it
      // mimeType: 'video/webm;codecs=vp8',
      mimeType: 'video/webm;codecs=vp8,opus',
      videoBitsPerSecond: 1200000,
    });
    // this.recorder.setVideoEncoder(H.264 AVC)
    this.recorder.startRecording(); // error comes in this line for firefox
    this.startTime = moment();
    this.interval = setInterval(
      () => {
        const currentTime = moment();
        const diffTime = moment.duration(currentTime.diff(this.startTime));
        const time = this.toString(diffTime.minutes()) + ':' + this.toString(diffTime.seconds());
        this._recordingTime.next(time);
        this._stream.next(this.stream);
        this._minutes.next({minutes:diffTime.minutes(),seconds:diffTime.seconds()});
      },
      500
    );
  }

  private toString(value) {
    let val = value;
    if (!value) {
      val = '00';
    }
    if (value < 10) {
      val = '0' + value;
    }
    return val;
  }

  stopRecording() {
    if (this.recorder) {
      this.recorder.stopRecording(this.processVideo.bind(this));
    }
  }

  private processVideo(audioVideoWebMURL) {
    
    const recordedBlob = this.recorder.getBlob();
    this.recorder.getDataURL(function (dataURL) { });
    const recordedName = encodeURIComponent('video_' + new Date().getTime() + '.mp4');
    this._recorded.next({ blob: recordedBlob, url: audioVideoWebMURL, title: recordedName });
    this.stopMedia();
  }

  private stopMedia() {
    if (this.recorder) {
      this.recorder = null;
      clearInterval(this.interval);
      this.startTime = null;
      if (this.stream) {
        this.stream.getAudioTracks().forEach(track => track.stop());
        this.stream.getVideoTracks().forEach(track => track.stop());
        this.stream.stop();
        this.stream = null;
      }
    }
  }
}
