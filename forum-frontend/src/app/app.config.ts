import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import {
  Router,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ConfigService } from './config/config.service';
import { AuthInterceptor } from './shared/authentication/auth-intercepter';
import { JwtModule } from '@auth0/angular-jwt';
import { first, map, take, tap } from 'rxjs';

function tokenGetter() {
  return localStorage.getItem('jwt');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom(HttpClientModule),
    {
      provide: APP_INITIALIZER,
      useFactory: (config: ConfigService) => {
        return () => {
          config.loadConfig().subscribe();
          let c = config.config$.pipe(
            first((n) => n.apiUrl !== ''),
            map((n) => {
              true;
            })
          );
        };
      },
      multi: true,
      deps: [ConfigService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: function (router: Router) {
        return new AuthInterceptor(router);
      },
      multi: true,
      deps: [Router],
    },
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: ['https://localhost:7226'],
          disallowedRoutes: [],
        },
      })
    ),
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
