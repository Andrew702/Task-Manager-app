import { Component, EventEmitter, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { NotificationBanner } from './Components/notification-banner/notification-banner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, NotificationBanner],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  AppTask: Task = {
    id: '',
    tasktitle: '',
    taskdescription: '',
    taskpriority: '',
    taskduedate: '',
    taskcategory: '',
    taskdone: false,
  };

  // RecieveTaskInput(recievedTask: Task) {
  //   this.AppTask = recievedTask;
  // }
}

export interface Task {
  id: string;
  tasktitle: string;
  taskdescription: string;
  taskpriority: string;
  taskduedate: string;
  taskcategory: string;
  taskdone: boolean;
}
