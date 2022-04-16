import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(public router:Router,) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const admin = JSON.parse(localStorage.getItem('admin') || '{}');
        if(!admin?.token?.access_token){
            this.router.navigateByUrl('full/authentication/login')
            return false
        }
        return admin?.token?.access_token ? true:false;
    }
}