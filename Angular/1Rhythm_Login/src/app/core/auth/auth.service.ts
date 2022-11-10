import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginURL = environment.loginUrl;
  constructor(private http:HttpClient) { }

  SignIn(email:string,password:string){
    return this.http.post(`${this.loginURL}`,{
      email:"jinaltandel06@gmail.com",
      password:"12345678",
      token:true
    })
  }
}
