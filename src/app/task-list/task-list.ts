import { Component, input } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../app';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  TaskArr: Task[] = [];
}
