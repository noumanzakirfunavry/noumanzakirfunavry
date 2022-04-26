import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpEvent, HttpRequest } from "@angular/common/http";
import { catchError, Observable, tap } from "rxjs";
import { Router } from "@angular/router";
import { CommonStore } from "../store/common.store";
import { DisableLoaderCalls, DisableNotification } from "./bypassRequests";
import { NzMessageService } from "ng-zorro-antd/message";


@Injectable({
  providedIn: "root",
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router,
    private commonStore: CommonStore, 
    private message: NzMessageService 
    ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const ifDisableLoader = DisableLoaderCalls.some(x => request.urlWithParams.match(x));
    if (!ifDisableLoader) { this.commonStore.loaderStart(); }
    if (
      (request.urlWithParams.match(/login$/) ||
        request.urlWithParams.match(/requestResetPassword$/) ||
        request.urlWithParams.match(/resetPassword$/)) &&
        request.method == ("POST" || "PUT" || "GET")
    ) {
      return next.handle(request).pipe(tap((evt: any) => {
        if (evt.body && evt.body.message) {
          this.commonStore.loaderEnd()
      }
      }),
        catchError(error => {
          this.commonStore.loaderEnd();
          if (error.statusText == 'Unknown Error') {
            this.router.navigateByUrl('server-down');
          }
          // this.commonStore.notifier({ message: error.error.message || error.message || 'Error Occured', action: 'error' });
          this.message.create( 'error', error.error?.message || error.message || 'Error Occured' );
          console.log("error in interceptor",error);
          
          throw (error)
        }));
    } else {
      const admin = JSON.parse(localStorage.getItem('admin') || '{}');
      const headers = request.headers
        .set("Authorization", 'Bearer ' + admin.token?.access_token)
      const authReq = request.clone({ headers: headers });
      return next.handle(authReq).pipe(tap((evt: any) => {
        if (evt.body && (evt.body.message || evt.status==200)) {
                    
          this.commonStore.loaderEnd()
      }
      }),
        catchError(error => {
          this.commonStore.loaderEnd();
          const ifDisableLoader = DisableNotification.some(x => request.urlWithParams.match(x));
          if ((!ifDisableLoader && error.status != 404 && error.status != 201) || (!ifDisableLoader && error.status == 403 && error.statusText == 'Forbidden')) {
            // this.commonStore.notifier({ message: error.statusText == 'Forbidden' ? 'Your session is expired. Please login again' : error.error?.message || error.message || 'Error Occured', action: 'error' })
            this.message.create( 'error', error.statusText == 'Forbidden' ? 'Access Denied' :  error.error?.message || error.message || 'Error Occured' )
          }
          if (error.statusText == 'Unknown Error') {
            this.router.navigateByUrl('server-down');
          }
          else if ((error.status == 401 && (error.error?.message == 'Unauthorized' || error.message == 'Unauthorized')) || error.error?.message == 'Invalid Token' || error.message == 'Invalid Token') {
            // this.profileStore.reset();
            window.localStorage.clear();
            this.router.navigateByUrl('/full/authentication/login');
          }
          else if (!ifDisableLoader && error.status == 404 && error.statusText == 'Not Found') {
            this.message.create('error', error.error?.message || error.message)
          }
          console.log("error auth http call", error)
          throw (error)
        }));
    }
  }
}