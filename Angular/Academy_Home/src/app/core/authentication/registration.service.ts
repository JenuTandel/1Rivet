import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationData } from "../authentication/registrationData.model";


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  public baseUrl: string = "http://localhost:3000/registrationData/"
  constructor(
    private http: HttpClient
  ) { }

  AddUser(user: RegistrationData): Observable<RegistrationData> {
    return this.http.post<RegistrationData>(this.baseUrl, user);
  }

  getUser():Observable<RegistrationData[]>{
    return this.http.get<RegistrationData[]>(this.baseUrl);
  }
}
