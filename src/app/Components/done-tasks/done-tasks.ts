import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../../app';
import { TaskCard } from '../task-card/task-card';
import { Taskmanager } from '../../Services/taskmanager';

@Component({
  selector: 'app-done-tasks',
  imports: [TaskCard],
  templateUrl: './done-tasks.html',
  styleUrl: './done-tasks.css',
})
export class DoneTasks {
  TaskServ = inject(Taskmanager);
}
