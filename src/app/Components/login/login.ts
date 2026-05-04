import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styles: ``,
})
export class Login {
  // @ViewChild('form') myform!: ElementRef;

  Submit(form: NgForm) {
    console.log(form);
  }
}
