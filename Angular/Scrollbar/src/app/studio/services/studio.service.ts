import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pagination, studio } from '../studio.model';

@Injectable()
export class StudioService {

  apiURL = environment.baseURL;
  constructor(private http:HttpClient) { }

  getAllStudios(page:Pagination):Observable<studio[]>{
    return this.http.get<studio[]>(`${this.apiURL}studios?_page=${page.pageNumber}&_limit=${page.pageSize}`)
  }

  getAllArtist():Observable<any>{
    return this.http.get(`${this.apiURL}artists`);
  }
}
