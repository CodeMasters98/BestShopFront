import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { Injectable } from '@angular/core';
  import { Router } from '@angular/router';
  import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
  
  @Injectable()
  export class ErrorInterceptor implements HttpInterceptor {
  
    
    constructor(
      private router: Router,
      private toastr: ToastrService
    ) {}
  
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
        catchError((err) => {
          debugger;
          this.toastr.error('Error', err.error.message);
          if (err.status === 401) {
            //this.userService.logout();
            this.router.navigate(['/']);
          }
          const error = err.error.message || err.statusText;
          return throwError(error);
      
        })
      );
    }
  }