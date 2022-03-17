import { Injectable } from '@angular/core';
// import { UserModel } from '../shared/models/user';
// import { cloneDeep } from 'lodash';
import { SnakbarModel } from './snakbar.model';
// import { NgxSpinnerService } from "ngx-spinner";

declare let $: any;
@Injectable({
  providedIn: 'root'
})
export class CommonStore {
  loader = false;
  globalAlert: SnakbarModel | any;
  alertArray: Array<SnakbarModel> = [];
  redirectUrl:any;
  constructor(
    // private spinner: NgxSpinnerService
    ) {
    if (window.localStorage['redirectUrl']) {
      const redUrl = JSON.parse(localStorage["redirectUrl"]);
      this.redirectUrl=Object.assign({}, redUrl);
    }
  }

   loaderStart() {
    // this.spinner.show()
  }

  loaderState(){
    return this.loader;
  }

  loaderEnd() {
    setTimeout(() => {       
        // this.spinner.hide();
    }, 1000);
  }

  notifier(notification:any) {
    this.globalAlert = new SnakbarModel();
    this.globalAlert.id = Math.random().toString();
    this.globalAlert.isOpen = true;
    this.globalAlert.message = notification.message;
    this.globalAlert.case = notification.action;
    this.globalAlert.local=notification.local ? notification.local:false;
    this.alertArray.push(this.globalAlert);
    setTimeout(() => {
      if (this.alertArray && this.alertArray.length > 0) {
        this.alertArray.splice(0, 1)
      }
    }, 4000);
  }
  closeNotifier(alert:any) {
    const index = this.alertArray.findIndex(x => x.id == alert.id);
    if (index > -1) {
      this.alertArray.splice(index, 1);
    }
  }



   clearStore() {
    window.localStorage.clear();
    this.redirectUrl=null;
    $('.modal').modal('hide');
  }
   resetRedirectUrl()
  {
    this.redirectUrl=null;
    window.localStorage.removeItem('redirectUrl');
  }
   setRedirectUrl(url:any)
  {
    // this.redirectUrl = cloneDeep(url);
    // window.localStorage.setItem('redirectUrl', JSON.stringify(this.redirectUrl));
  }
}
