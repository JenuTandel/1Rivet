import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RegistrationData } from "../authentication/registrationData.model";
import { UserDataAdapter } from './userdata.adapter';


@Injectable()
export class RegistrationService {

  public baseUrl: string = "http://localhost:3000/registrationData/";
  public countryUrl: string = "http://localhost:3000/countries/";
  public stateUrl: string = "http://localhost:3000/states/";
  public cityUrl: string = "http://localhost:3000/cities/"
  constructor(
    private http: HttpClient,
    private userdataAdapter:UserDataAdapter
  ) { }

  AddUser(user: RegistrationData): Observable<RegistrationData> {
    return this.http.post<RegistrationData>(this.baseUrl, user)
  }

  getUser():Observable<RegistrationData[]>{
    return this.http.get<RegistrationData[]>(this.baseUrl).pipe(map((data:RegistrationData[])=>{
      return data.map((items: any) => this.userdataAdapter.toResponse(items));
    }));;
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
