import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthApi } from '../../Services/auth-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styles: ``,
})
export class Login {
  credApi = inject(AuthApi);
  route = inject(Router);
  @ViewChild('logging') loginMsg!: ElementRef;

  ngAfterViewInit() {
    console.log('run');
    this.loginMsg.nativeElement.style.display = 'none';
  }

  Submit(form: NgForm) {
    this.credApi.LogIn({
      username: '',
      email: form.form.controls?.['email'].value,
      password: form.form.controls?.['password'].value,
    });
  }
}
