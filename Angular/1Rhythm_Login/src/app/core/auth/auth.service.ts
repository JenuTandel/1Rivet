import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from 'src/app/user/login/user.model';
import { environment } from 'src/environments/environment';
import jwt_decode from "jwt-decode";


@Injectable()
export class AuthService {
  public loginURL = environment.loginUrl;
  private userSubject!: BehaviorSubject<any>;
  public user!: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  DecodeToken(token: string): string {
    return jwt_decode(token)
    }

  login(data:User):Observable<string>{
    return this.http.post<string>(`${this.loginURL}`,data);
  }
  // login(data:User) {
  //   return this.http.post<any>(`${this.loginURL}users/authenticate`, data).pipe(map((userData:User)=>{
  //     userData.tokenId = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImppbmFsdGFuZGVsMDZAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3OCJ9.9vQp76GvDP0sh1BXA7hdyhDbXdQumzqsPuh-EemG0Vg";
  //     const data = this.DecodeToken(userData.tokenId);
  //     console.log(data);
      
  //     localStorage.setItem('user', JSON.stringify(userData));
  //     this.userSubject.next(userData);
  //     return userData;
  //   }))
  // }

  logout() {
    localStorage.removeItem('user');
    // this.userSubject.next(null);
    this.router.navigateByUrl('login');
  }
}

