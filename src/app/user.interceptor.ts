import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');
    const clonedRequest = request.clone({
      setHeaders: {
        Authorization: token ? `Bearer ${token}` : ""
      }
    });
    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          alert('Unauthorized please login again')
        } else if (error.status === 500) {
          alert('Internal Server Error')
        } else if (error.status === 404) {
          alert('Api Url not valid')
        } else {
          alert("Something went wrong... in interceptor")
        }
        return throwError(error)
      })
    )
  }
}
