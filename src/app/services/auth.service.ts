import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private afAuth = inject(AngularFireAuth);
  private router = inject(Router);
  private authErrorSubject = new Subject<string>();
  user$ = this.afAuth.authState;
  authError$ = this.authErrorSubject.asObservable();
  private isAuthenticatedSubject = new Subject<boolean>();
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    this.user$.subscribe(user => { this.isAuthenticatedSubject.next(!!user); console.log(user) })
  }

  signUp(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['admin', 'dashboard'])
      })
      .catch((error) => {
        this.authErrorSubject.next(error.message);
      })
  }
  logMeIn(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .catch((error) => {
        this.authErrorSubject.next(error.message);
      })
  }
  logMeOut() {
    this.afAuth.signOut()
      .then((a) => {
        console.log(a);
        window.alert("Logout successfully");
      })
      .catch((error) => {
        this.authErrorSubject.next(error.message);
        console.log(error.message);
        window.alert("how the hell we didn't log tf out!?");
      })
  }
  get isAuthenticatedFirebase(): boolean {
    return this.afAuth.currentUser !== null;
  }
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
