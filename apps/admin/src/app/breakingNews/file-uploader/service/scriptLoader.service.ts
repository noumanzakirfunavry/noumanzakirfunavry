import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { requests } from 'src/app/common/config/requests';
interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
//   { name: 'video-js-css', src: 'https://cdnjs.cloudflare.com/ajax/libs/video.js/7.5.5/video-js.min.css' },
//   { name: 'video-js-record-css', src: 'https://cdnjs.cloudflare.com/ajax/libs/videojs-record/3.8.0/css/videojs.record.min.css' },
  // { name: 'video-record', src: 'https://cdnjs.cloudflare.com/ajax/libs/videojs-record/3.8.0/videojs.record.js' },
  { name: 'RecordRTC', src: 'https://cdn.WebRTC-Experiment.com/RecordRTC.js' },
  // { name: 'video-min', src: 'https://cdnjs.cloudflare.com/ajax/libs/video.js/7.5.5/video.min.js' },
  // { name: 'webRTC', src: 'https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/6.1.1/adapter.min.js' },
];

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  private scripts: any = {};

  constructor(public http:HttpClient) {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
    let dataLoaded = this.load('RecordRTC');
  }

  getSettings(body){
    return this.http.post(requests.getSettings,body).pipe(map((res:any)=>{
      console.log("res vid", res);
        return res?.results && res.results.length && res.results[0];
    }))
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      } else {
        // load script
        const script = document.createElement('script');
        // script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        script.onload = () => {
          this.scripts[name].loaded = true;
          console.log(`${name} Loaded.`);
          resolve({ script: name, loaded: true, status: 'Loaded' });
        };
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }
}