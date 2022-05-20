import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MediaUtilService {
    constructor() { }

    async fileToBase64(file: File) {

        return new Promise(

            (resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e: any) => {
                    resolve(e.target.result);
                }
                reader.readAsDataURL(file);
            });
    }

    urlToFile(url: string) {
        // return new Promise((resolve, reject) => {
        const filename = url.substring(url.lastIndexOf('/') + 1);
        let fileExtension = filename.substr((filename.lastIndexOf('.') + 1));
        if (fileExtension == 'mp4') {
            fileExtension = 'video/mp4';
        }
        // if(!url.includes('access_token') && this.profileStore.acessToken){
        //     url= url.concat("?access_token=".concat(this.profileStore.acessToken));
        // }
        return fetch(url)
            .then(res => res.blob())
            .then(async blob => {
                return new File([blob], filename,
                    { type: fileExtension == 'video/mp4' ? 'video/mp4' : 'image/jpeg' });

            })
    }

}