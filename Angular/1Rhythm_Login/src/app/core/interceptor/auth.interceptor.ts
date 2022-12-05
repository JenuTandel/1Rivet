import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { Messages } from './interceptor.model';
import { LoaderService } from 'src/app/core/services/loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private requests: HttpRequest<any>[] = [];
  public message: string;
  constructor(private loaderService: LoaderService) {
    this.message = '';
  }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.loaderService.status.next(this.requests.length > 0);
  }

  /**
   * @author Jinal Tandel
   * @param request 
   * @param next 
   * @returns request
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.requests.push(request);
    this.loaderService.status.next(true);
    console.log("No of requests--->" + this.requests.length);

    // this.loaderService.showLoader(true)
    // add authorization header with basic auth credentials if available
    let currentUser = JSON.parse(localStorage.getItem('user')!);
    if (!request.url.endsWith('login' || 'user' || 'refresh')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${currentUser?.tokenId}`,
        }
      });
    }

    //     return Observable.create((observer:any) => {
    //       const subscription = next.handle(request)
    //         .subscribe(
    //           event => {
    //             if (event instanceof HttpResponse) {
    //               this.removeRequest(request);
    //               observer.next(event);
    //             }
    //           },
    //           err => {
    //             alert('error' + err);
    //             this.removeRequest(request);
    //             observer.error(err);
    //           },
    //           () => {
    //             this.removeRequest(request);
    //             observer.complete();
    //           });
    //       // remove request from queue when cancelled
    //       return () => {
    //         this.removeRequest(request);
    //         subscription.unsubscribe();
    //       };
    //     });
    //   }
    // }
    // return next.handle(request)
    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        // console.log("Error" + errorResponse, errorResponse.error);
        if (errorResponse && errorResponse.error instanceof ErrorEvent) {
          this.removeRequest(request);
          // console.log("Error in if" + errorResponse, errorResponse.error);
          this.message = `Error: ${errorResponse && errorResponse.error}`;
          // console.log(errorResponse.status);

          switch (errorResponse.status) {
            case 400:
              this.message = Messages.MessageForInvalidInput
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
        // return throwError({ error: {message:this.message} });
        return throwError(() => new Error(this.message));
      }),
      finalize(() => {
        this.loaderService.status.next(false);
        this.removeRequest(request);
      })
    );
  }
}
