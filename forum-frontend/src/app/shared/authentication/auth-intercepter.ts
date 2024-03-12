import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private route: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('jwt');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(req).pipe(
      tap({
        next: () => {},
        error: (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status !== 401) {
              return;
            }
            this.route.navigate(['signin']);
          }
        },
      })
    );
  }
}
