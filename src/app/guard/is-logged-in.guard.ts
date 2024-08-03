import { CanActivateFn } from '@angular/router';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('loggedIn') == 'true') {
    return true;
  } else {
    return false;
  }
};
