import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "../_services/authentication.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // add authorization header with jwt token if available
    let currentUser: any;
    
    currentUser = this.authenticationService.currentUserValue;
    if (currentUser == null) {
      var userStr = localStorage.getItem("currentUser");
      if (userStr && userStr.length > 0) {
        currentUser = JSON.parse(userStr);
      }
    }
    if (currentUser && currentUser.jwToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.jwToken}`
        }
      });
    } else {
      
    }

    return next.handle(request);
  }
}