import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { studio } from '../studio.model';

@Injectable()
export class StudioService {

  apiURL = environment.baseURL;
  constructor(private http:HttpClient) { }

  getAllStudios(page:any):Observable<studio[]>{
    return this.http.get<studio[]>(`${this.apiURL}/studios?_page=${page.pageNumber}&_limit=${page.pageSize}`)
  }
}
