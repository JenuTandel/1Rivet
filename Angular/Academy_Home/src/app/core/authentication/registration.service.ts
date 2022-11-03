import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationData } from "../authentication/registrationData.model";


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  public baseUrl: string = "http://localhost:3000/registrationData/";
  public countryUrl: string = "http://localhost:3000/countries/";
  public stateUrl: string = "http://localhost:3000/states/";
  public cityUrl: string = "http://localhost:3000/cities/"
  constructor(
    private http: HttpClient
  ) { }

  AddUser(user: RegistrationData): Observable<RegistrationData> {
    return this.http.post<RegistrationData>(this.baseUrl, user);
  }

  getUser():Observable<RegistrationData[]>{
    return this.http.get<RegistrationData[]>(this.baseUrl);
  }

  getCountries():Observable<any> {
    return this.http.get(this.countryUrl);
  }

  getStatesByCountry():Observable<any> {
    return this.http.get(this.stateUrl);
  }

  getCitiesByState():Observable<any> {
    return this.http.get(this.cityUrl);
  }
}
