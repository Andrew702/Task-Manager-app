import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { myheadercomp } from './Headercomp/headercomp';
import { TaskInputCompClass } from './TaskInputcomp/TaskInputcomp';
import { TaskListCompClass } from './TaskListComp/TaskListComp';
import { FooterCompClass } from './FooterComp/FooterComp';

@Component({
  selector: 'app-root',
  imports: [myheadercomp, TaskInputCompClass, TaskListCompClass, FooterCompClass],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('lab01');
}
