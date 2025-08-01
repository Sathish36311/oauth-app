import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginRequest } from '../models/login-request.model';
import { RegisterRequest } from '../models/register-request.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent {

  constructor(private router: Router) { }

  // service injection
  private authService = inject(AuthService)

  isLoginMode = false;

  toggleForm(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  signInWithGoogle() {
    window.location.href = 'http://localhost:3000/api/auth/google';
  }

  onRegister(form: NgForm) {
    if (form.invalid) return
    const request: RegisterRequest = form.value
    this.authService.register(request).subscribe({
      next: (res) => {
        alert(res.message);
        this.toggleForm();
        form.reset();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onLogin(form: NgForm) {
    if (form.invalid) return;
    const request: LoginRequest = form.value;
    this.authService.login(request).subscribe({
      next: (res) => {
        this.router.navigate(['/dashboard']);
        form.reset();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
