import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
    constructor(private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const admin = JSON.parse(localStorage.getItem('admin') || '{}');
        if(admin.token.access_token){
            this.router.navigate(['dashboard']);
            return false
        }
        return !admin.token.access_token;
    }
}