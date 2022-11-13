import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public todaysDate:any;
 
  constructor() {
    this.todaysDate = Date.now();
   }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add authorization header with basic auth credentials if available

    let currentUser = JSON.parse(localStorage.getItem('user')!);
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${currentUser.token}`,
          zoneOffset:this.todaysDate
        }
      });
    }

    return next.handle(request);
  }
}
