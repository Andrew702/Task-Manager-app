import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

function noMatch(frmGrp: AbstractControl): null | ValidationErrors {
  const password = frmGrp.get('password')?.value;
  const confirm = frmGrp.get('confirm')?.value;

  return password === confirm ? null : { noMatch: true, message: "passwords aren't the same" };
}

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styles: ``,
})
export class Signup {
  signupform = new FormGroup(
    {
      username: new FormControl('', [Validators.minLength(6), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      confirm: new FormControl('', [Validators.minLength(6), Validators.required]),
    },
    [noMatch],
  );

  Submit() {
    console.log(this.signupform);
  }
}
