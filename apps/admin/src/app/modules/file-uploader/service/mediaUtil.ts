import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MediaUtilService {
    constructor() { }

    async fileToBase64(file: File) {

        return new Promise(

            (resolve, reject) => {
                let reader = new FileReader();
                reader.onload = (e: any) => {
                    resolve(e.target.result);
                }
                reader.readAsDataURL(file);
            });
    }

}