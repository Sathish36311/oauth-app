import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';
import { RegisterRequest } from '../models/register-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private readonly authUrl = environment.apiUrl + '/api/auth';

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.authUrl}/login`, request, { withCredentials: true }).pipe(
      tap((response: LoginResponse) => {
        localStorage.setItem('access_token', response.accessToken);
      })
    );
  }

  register(request: RegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/register`, request, { withCredentials: true });
  }

}
