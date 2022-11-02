import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private loginService:LoginService) {
    const token = localStorage.getItem('profanis_auth');
    this._isLoggedIn$.next(!!token);
  }

  public userIsLogin(): boolean {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      return true;
    } else {
      return false;
    }

  }
  login(email: string, password: string) {
    return this.loginService.login(email, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('profanis_auth', response.token);
      })
    );
  }
}
