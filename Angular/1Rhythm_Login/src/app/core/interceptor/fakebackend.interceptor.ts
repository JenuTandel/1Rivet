import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class FakebackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let testUser = { id: 1, emailId: 'jinaltandel06@gmail.com', password: '12345678' };

    // wrap in delayed observable to simulate server api call
    // return of(null).pipe(mergeMap(() => {

      // authenticate
      if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
        if (request.body.emailId === testUser.emailId && request.body.password === testUser.password) {
          // if login details are valid return user details
          let body = {
            id: testUser.id,
            emailId: testUser.emailId,
          };
          return of(new HttpResponse({ status: 200, body }));
        } else {
          // else return 400 bad request
          return throwError({ error: { message: 'Email ID or password is incorrect' } });
        }
      }
      return next.handle(request);
    // })
    // )
  }
}

export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakebackendInterceptor,
  multi: true
};
