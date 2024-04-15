import { inject } from '@angular/core';
import { Router, CanActivateFn, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable, map } from 'rxjs';

export const AuthGuard: CanActivateFn = (
): Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  return inject(AuthService).isAuthenticated$.pipe(
    map(isAuthenticated => {
      console.log(isAuthenticated)
      return isAuthenticated ? true : inject(Router).createUrlTree(['admin', 'login']);
    })
  );
}