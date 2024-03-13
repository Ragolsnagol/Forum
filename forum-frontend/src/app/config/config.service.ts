import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config, ConfigDefault } from './config';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config = new BehaviorSubject<Config>(ConfigDefault);
  config$: Observable<Config> = this.config.asObservable();

  constructor(private http: HttpClient) {}

  private createConfig(config: any): Config {
    const _config = { ...(<Config>config) };
    return _config;
  }

  loadConfig(): Observable<boolean> {
    return this.http.get<Config>('/assets/config/config.json').pipe(
      map((response) => {
        const config = this.createConfig(response);
        this.config.next(config);
        return true;
      }),
      catchError((error) => {
        console.log(error);
        return of(false);
      })
    );
  }
}
