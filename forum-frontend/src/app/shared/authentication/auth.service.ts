import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import { AuthResponse } from '../models/authentication/auth-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl?: string;
  constructor(private http: HttpClient, configService: ConfigService) {
    configService.config$.subscribe((value) => {
      this.baseUrl = value.apiUrl;
    });
  }

  public signIn(email: string, password: string) {
    const loginUrl = this.baseUrl + '/login';
    return this.http.post<AuthResponse>(loginUrl, { email, password });
  }

  public signOut() {
    const logoutUrl = this.baseUrl + '/logout';

    return this.http.post(
      logoutUrl,
      {},
      {
        withCredentials: true,
        observe: 'response',
        responseType: 'text',
      }
    );
  }

  public register(email: string, password: string) {
    const registerUrl = this.baseUrl + '/register';

    return this.http.post(registerUrl, { email, password });
  }
}
