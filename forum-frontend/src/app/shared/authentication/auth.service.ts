import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../../config/config.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl?: string;
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.baseUrl = configService.config?.apiUrl;
  }

  public signIn(email: string, password: string) {
    const loginUrl = this.baseUrl + '/login';

    this.http.post(loginUrl, { email, password }).subscribe();
  }

  public signOut() {
    const logoutUrl = this.baseUrl + '/logout';

    this.http
      .post(
        logoutUrl,
        {},
        {
          withCredentials: true,
          observe: 'response',
          responseType: 'text',
        }
      )
      .subscribe();
  }

  public register(email: string, password: string) {
    const registerUrl = this.baseUrl + '/register';

    this.http.post(registerUrl, { email, password }).subscribe();
  }
}
