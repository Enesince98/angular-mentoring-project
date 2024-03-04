import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) { }
  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/admin/dashboard']);
    } else {
      console.log('Invalid username or password');
    }
  }
}
