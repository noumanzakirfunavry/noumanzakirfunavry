import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { finalize, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {

  constructor(public httpClient: HttpClient) { }

  uploadFile(file, recorded?) {
    let formData: FormData = Object.assign(new FormData());
    formData.append("file", file, file.name);
    formData.append("title", file.name);
    formData.append("date", new Date().toLocaleDateString());
    if (recorded) {
      formData.append("recorded", recorded);
    }
    return this.httpClient.post(environment.url + '/uploadfile', formData).pipe(map(res => {
      return res
    }, err => {
      return err
    }))
  }

  uploadFileProgress(file, recorded?) {
    let formData: FormData = Object.assign(new FormData());
    formData.append("file", file, file.name);
    formData.append("title", file.name);
    formData.append("date", new Date().toLocaleDateString());
    if (recorded) {
      formData.append("recorded", recorded);
    }
    return this.httpClient.post(environment.url + '/uploadfile', formData, {
      reportProgress: true,
      observe: 'events'
    })
  }

  uploadLink(body: {
    "link": string,
    "date": Date
  }) {
    return this.httpClient.post(environment.url + '/uploadlink', body).pipe(map(res => {
      return res
    }, err => {
      return err
    }))
  }
}
