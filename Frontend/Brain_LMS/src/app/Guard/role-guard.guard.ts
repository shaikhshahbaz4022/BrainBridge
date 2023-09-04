import { CanActivateFn, Router } from '@angular/router';

export const roleGuardGuard: CanActivateFn = (route, state) => {
  const user = JSON.parse(localStorage.getItem('user') || '[]');
  const router = new Router();
  if (user) {
    if (user.role == 'instructor') {
      router.navigate(['/instructordashboard']);
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
