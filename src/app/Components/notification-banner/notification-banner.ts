import { Component, inject } from '@angular/core';
import { NotificationService } from '../../Services/notification-service';

@Component({
  selector: 'app-notification-banner',
  imports: [],
  template: `
    @if (notif.notification()) {
      <div class="banner" [class]="notif.notification()!.type">
        <span>{{ notif.notification()!.message }}</span>
        <button (click)="notif.clear()">✕</button>
      </div>
    }
  `,
  styles: [
    `
      .banner {
        position: fixed;
        width: 25vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 20px;
        font-size: 14px;
        position: fixed;
        top: 60px;
        right: 16px;
        z-index: 1000;
      }
      .success {
        background: #d4edda;
        color: #155724;
      }
      .error {
        background: #f8d7da;
        color: #721c24;
      }
      .warning {
        background: #fff3cd;
        color: #856404;
      }
      .info {
        background: #d1ecf1;
        color: #0c5460;
      }
      button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
      }
    `,
  ],
})
export class NotificationBanner {
  notif = inject(NotificationService);
}
