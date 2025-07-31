import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { }

  isLoginMode = false;

  toggleForm(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  signInWithGoogle() {
    window.location.href = 'http://localhost:3000/api/auth/google';
  }
}
