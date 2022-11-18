import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { Messages } from './interceptor.model';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ToastrMessageService } from 'src/app/shared/services/toastrMessage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public message: string;
  constructor(private loaderService: LoaderService) { 
    this.message = '';
  }

  /**
   * @author Jinal Tandel
   * @param request 
   * @param next 
   * @returns 
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.loaderService.showLoader(true)
    // add authorization header with basic auth credentials if available
    let currentUser = JSON.parse(localStorage.getItem('user')!);
    if (!request.url.endsWith('login' || 'register' || 'refreshToken')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${currentUser?.tokenId}`,
        }
      });
    }

    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        console.log("Error" + errorResponse, errorResponse.error);
        if (errorResponse && errorResponse.error instanceof ErrorEvent) {
          console.log("Error in if" + errorResponse, errorResponse.error);
          this.message = `Error: ${errorResponse && errorResponse.error}`;
          console.log(errorResponse.status);

          switch (errorResponse.status) {
            case 400:
              this.message = ""
              break;
            case 401:
              this.message = Messages.MessageForUnauthorizedUser
              break;
            case 500:
              this.message = Messages.MessageForInternalServerError
              break;
            default:
              this.message = ""
              break;
          }
        }
        return throwError({ error: {message:this.message} });
        // return throwError(()=>new Error(this.message));
      }),
      finalize(() => this.loaderService.showLoader(false))
    );
  }
}
