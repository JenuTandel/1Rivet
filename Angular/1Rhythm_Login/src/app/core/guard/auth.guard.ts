import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router: Router
    ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /**
     * @author Samkeet Kevat
     * @description ""
     */
    const userData = JSON.parse(localStorage.getItem('user')!)
    if (userData) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }

}
