import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../shared/authentication/auth.service';
import { RouterLink } from '@angular/router';
import { response } from 'express';
import { AuthResponse } from '../../shared/models/authentication/auth-response';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  submitSignin() {
    console.log(this.loginForm.value);
    this.authService
      .signIn(
        this.loginForm.value.email ?? '',
        this.loginForm.value.password ?? ''
      )
      .subscribe({
        next: (response: AuthResponse) => {
          const token = response.accessToken;
          localStorage.setItem('jwt', token);
        },
        error: (err: HttpErrorResponse) => {},
      });
  }
}
