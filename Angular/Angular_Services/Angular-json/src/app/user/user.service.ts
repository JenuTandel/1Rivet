import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseURL: string;
  constructor(
    public http: HttpClient
  ) {
    this.baseURL = "http://localhost:3000"
  }

  getUsers(): Observable<any> {
    const url = `${this.baseURL}/users`;
    return this.http.get(url);
  }

  addUsers(user: Users): Observable<any> {
    return this.http.post(`${this.baseURL}/users`, user);
  }

  editUsers(user: Users, user_id: number): Observable<any> {
    return this.http.put(`${this.baseURL}/users/${user_id}`, user)
  }

  getUserById(user_id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/users/${user_id}`)
  }
  deleteUser(user_id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/users/${user_id}`)
  }

}
