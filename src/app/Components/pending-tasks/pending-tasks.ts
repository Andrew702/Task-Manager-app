import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../../app';
import { Taskmanager } from '../../Services/taskmanager';

@Component({
  selector: 'app-pending-tasks',
  imports: [TaskCard],
  templateUrl: './pending-tasks.html',
  styleUrl: './pending-tasks.css',
})
export class PendingTasks {
  TaskServ = inject(Taskmanager);
}
