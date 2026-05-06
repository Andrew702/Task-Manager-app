import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notification = signal<Notification | null>(null);
  show(notification: Notification) {
    this.notification.set(notification);
    if (notification.duration != 0) {
      setTimeout(
        () => {
          this.clear();
        },
        notification.duration == null ? 3000 : notification.duration,
      );
    }
  }

  clear() {
    this.notification.set(null);
  }
}

export interface Notification {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number; //0 = persistent
}
