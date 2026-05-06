import { Component, inject } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthApi } from '../../Services/auth-api';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  authserv = inject(AuthApi);
  logout() {
    this.authserv.LogOut();
  }
}
