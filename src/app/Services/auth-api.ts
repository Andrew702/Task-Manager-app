import { HttpClient } from '@angular/common/http';
import { booleanAttribute, ElementRef, inject, Injectable, signal } from '@angular/core';
import { URL } from './task-api';
import { stringify } from 'uuid';
import { __param } from 'tslib';
import { email } from '@angular/forms/signals';
import { NotificationService } from './notification-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  http = inject(HttpClient);
  notify = inject(NotificationService);
  router = inject(Router);

  loggedState = signal<boolean>(false);

  SignUp(_Cred: AuthCred) {
    this.http.post<AuthCred>(URL + '/Users', _Cred).subscribe({
      next: (mycred) => {
        localStorage.setItem('token', JSON.stringify(mycred)); //when user signs in login automatically
        console.log('logged in');
        this.notify.show({
          //notify
          message: 'Signed up, Redirecting',
          type: 'success',
          duration: 2000,
        });
        this.router.navigate(['/main', 'home']);
        this.loggedState.set(true);
      },
      error: (errorobj) => {
        this.notify.show({
          //notify
          message: 'Server Error',
          type: 'error',
          duration: 2000,
        });
        console.log(`error in signup: ${errorobj}`);
      },
    });
  }

  LogIn(_Cred: AuthCred) {
    this.http
      .get<AuthCred[]>(URL + '/Users', {
        params: { email: _Cred.email, password: _Cred.password },
      })
      .subscribe({
        next: (mycred) => {
          if (mycred.length > 0) {
            console.log(mycred);
            localStorage.setItem('token', JSON.stringify(mycred[0]));
            this.notify.show({
              message: 'Logged In, Redirecting',
              type: 'success',
              duration: 2000,
            });
            this.router.navigate(['/main', 'home']);
            console.log('logged in');
            this.loggedState.set(true);
          } else {
            console.log('Invalid Credentials');
            this.notify.show({
              message: 'Wrong Credentials',
              type: 'error',
              duration: 2000,
            });
          }
        },
        error: (errorobj) => {
          this.notify.show({
            message: 'Server Error',
            type: 'error',
            duration: 2000,
          });
          console.log(`error in signup: ${errorobj}`);
        },
      });
  }

  LogOut() {
    this.notify.show({
      message: 'Logging Out, Redirecting',
      type: 'success',
      duration: 2000,
    });
    this.router.navigate(['/auth', 'login ']);
    this.loggedState.set(false);
    localStorage.removeItem('token');
  }
}

type AuthCred = {
  username: string;
  email: string;
  password: string;
};
