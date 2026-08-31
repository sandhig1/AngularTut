import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { Authservice } from '../../services/authservice/authservice';

export const authinterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(Authservice);

  const accessTokenKey = 'access_token';
  const token = localStorage.getItem(accessTokenKey);

  // Don't attach token to refresh-token request
  if (req.url.includes('/refreshToken')) {
    return next(req);
  }

  // Add access token
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {

      // Only handle 401
      if (error.status !== 401) {
        return throwError(() => error);
      }

      //console.log('Access token expired. Refreshing token...');

      const userName = localStorage.getItem('UserName');

      const loginRequest = {
        UserName: userName!,
        UserType: 'admin'
      };

      return authService.refreshToken(loginRequest).pipe(

        switchMap((response: any) => {

          //console.log('Token refreshed successfully');

          const newToken = response.token;

          // Save new token
          localStorage.setItem(accessTokenKey, newToken);

          // Retry original request
          const retryRequest = req.clone({
            setHeaders: {
              Authorization: `Bearer ${newToken}`
            }
          });

          return next(retryRequest);
        }),

        catchError((refreshError) => {

          //console.error('Refresh token failed', refreshError);

          // Refresh failed → logout
          // authService.logout();

          return throwError(() => refreshError);
        })
      );
    })
  );
};