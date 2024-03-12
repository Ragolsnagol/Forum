import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public config?: Config;

  constructor(private http: HttpClient) {}

  loadConfig() {
    this.http.get<Config>('/assets/config/config.json').subscribe(
      (data) =>
        (this.config = {
          apiUrl: data.apiUrl,
        })
    );
  }
}
