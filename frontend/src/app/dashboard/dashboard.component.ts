import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavComponent } from '../shared/nav/nav.component';

@Component({
  selector: 'app-dashboard',
  imports: [NavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor() { }

  authService = inject(AuthService)


}
