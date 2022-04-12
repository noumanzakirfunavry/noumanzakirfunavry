import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { requests } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Generate a url using the environments
   * @param {any} url
   * @returns string
   */

  /**
   * Sends a request on server side. Default switch case will be used for GET requests.
   * @param {any} url
   * @param {string} type
   * @param {any} formData
   * @returns Promise
   */
  sendRequest(url: any, type: string, formData: any = {}) {
    
    const params = this.transformFormDataToParams(formData || {});
    switch (type.toLowerCase()) {
      case 'post':
        return this.httpClient.post(url, formData);
      case 'put':
        return this.httpClient.put(url, formData);
      case 'patch':
        return this.httpClient.patch(url, formData);
      case 'delete':
        return this.httpClient.delete(url, {params: params});
      case 'upload_file':
        return this.httpClient.post(url, formData)
      default:
        return this.httpClient.get(url, {params: params});
    }
  }

  /**
   * Makes params from form data
   * @param any
   * @returns HttpParams
   */
  private transformFormDataToParams(formData: any) {
    let params = new HttpParams();
    if (Object.keys(formData).length) {
      Object.keys(formData).forEach((key) => {
        if (Array.isArray(formData[key])) {
          formData[key].forEach((k: any) => {
            params = params.append(key + '[]', k);
          });
        } else {
          params = params.append(key, formData[key]);
        }
      });
    }
    return params;
  }

  // file uploader

  uploadFileProgress(file, description?,) {
    let formData: FormData = Object.assign(new FormData());
    formData.append("file", file);
    formData.append("title", file.name);
    formData.append("description", description || 'test description');
    formData.append("attachmentType", 'IMAGE');
    // if (recorded) {
    //   formData.append("recorded", recorded);
    // }
    return this.httpClient.post(requests.addNewAttachment, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }
}
