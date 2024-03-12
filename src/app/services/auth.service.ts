import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedValue: boolean = false;
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticatedValue = true;
      return true;
    } else {
      return false;
    }
  }
  logout(): void {
    this.isAuthenticatedValue = false;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }
}
