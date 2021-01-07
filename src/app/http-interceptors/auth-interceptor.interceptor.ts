import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from '../authguard-service.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private auth:AuthguardServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
   const authToken= this.auth.gettoken();
   console.log(authToken);
  // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.

    const authReq=request.clone({
      headers:request.headers.set('x-access-token',authToken)
    })

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
