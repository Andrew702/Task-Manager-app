import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../../app';
import { Taskmanager } from '../../Services/taskmanager';

@Component({
  selector: 'app-all-tasks',
  imports: [TaskCard],
  templateUrl: './all-tasks.html',
  styleUrl: './all-tasks.css',
})
export class AllTasks {
  TaskServ = inject(Taskmanager);
}
