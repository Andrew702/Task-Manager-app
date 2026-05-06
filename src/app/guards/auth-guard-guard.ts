import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NotificationService } from '../Services/notification-service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const notify = inject(NotificationService);
  if (localStorage.getItem('token')) return true;

  notify.show({
    message: 'you must be logged in first',
    type: 'error',
    duration: 0,
  });
  router.navigate(['/auth', 'login']);
  return false;
};
