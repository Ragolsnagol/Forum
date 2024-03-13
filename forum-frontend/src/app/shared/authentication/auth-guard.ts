import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export function AuthGuard(): CanActivateFn {
  return () => {
    const router: Router = inject(Router);
    const token = localStorage.getItem('token');

    // TODO: Add some actual checking here other than that the token exists
    if (token) {
      return true;
    }

    router.navigate(['signin']);
    return false;
  };
}
