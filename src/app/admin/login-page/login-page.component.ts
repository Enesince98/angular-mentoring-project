import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private titleService = inject(TitleService);
  ngOnInit(): void {
    this.titleService.setTitle("Login Page");
  }
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  login(): void {
    if (this.loginForm.value.username && this.loginForm.value.password) {
      if (this.authService.login(this.loginForm.value.username, this.loginForm.value.password)) {
        this.router.navigate(['admin', 'dashboard']);
      } else {
        console.log('Invalid username or password');
      }
    }

  }
}
