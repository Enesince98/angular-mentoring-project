import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
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
  private formBuilder = inject(NonNullableFormBuilder);
  private titleService = inject(TitleService);
  private router = inject(Router);
  authError$ = this.authService.authError$;
  isAuthenticated$ = this.authService.isAuthenticated$;
  ngOnInit(): void {
    this.titleService.setTitle("Login Page");
    this.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['admin', 'dashboard'])
        console.log("AAAAAAAAAAAAAAAA")
      }
    });
  }
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  login(): void {
    if (this.loginForm.valid && this.loginForm.value.email && this.loginForm.value.password) {
      this.authService.logMeIn(this.loginForm.value.email, this.loginForm.value.password)
    }

  }

  logout() {
    this.authService.logMeOut();
  }
}
