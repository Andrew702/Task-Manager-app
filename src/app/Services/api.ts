import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  getTasks() {
    fetch('http://localhost:3000/tasks')
      .then((d) => d.json())
      .then((d) => console.log(d));
  }
}
