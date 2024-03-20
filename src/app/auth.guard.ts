import { inject } from '@angular/core';
import { Router, CanActivateFn, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

export const AuthGuard: CanActivateFn = (
): Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  return inject(AuthService).isAuthenticated() ? true : inject(Router).createUrlTree(['admin', 'login']);
}