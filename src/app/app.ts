import { Component, EventEmitter, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  AppTask: Task = {
    taskID: '',
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
  taskID: string;
  tasktitle: string;
  taskdescription: string;
  taskpriority: string;
  taskduedate: string;
  taskcategory: string;
  taskdone: boolean;
}
