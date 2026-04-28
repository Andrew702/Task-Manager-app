import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { TaskInput } from './task-input/task-input';
import { TaskList } from './task-list/task-list';
import { Footer } from './footer/footer';
import { Carousel } from './carousel/carousel';

@Component({
  selector: 'app-root',
  imports: [Header, TaskInput, TaskList, Footer, Carousel],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  TaskArr: Task[] = [];

  RecieveTaskInput(recievedTask: Task) {
    this.TaskArr.push({ ...recievedTask }); //push a copy
    console.log(this.TaskArr);
  }

  DeleteTask(Tasktodelete: Task) {
    this.TaskArr = this.TaskArr.filter((Task) => Task.taskID != Tasktodelete.taskID);
  }
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
