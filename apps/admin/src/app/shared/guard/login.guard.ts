import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
    constructor(private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const employee = JSON.parse(localStorage.getItem('employee') || '{}');
        if(employee.token){
            this.router.navigate(['auth']);
            return false
        }
        return !employee.token;
    }
}