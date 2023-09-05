import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = new Router();
  if (token) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
