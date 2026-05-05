import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../../app';
import { Taskmanager } from '../../Services/taskmanager';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input() Task: Partial<Task> = {};

  TaskServ = inject(Taskmanager);

  TaskDoneChanged() {
    this.TaskServ.taskMarkDoneToggle(this.Task.taskID!);
  }

  DeleteTask() {
    this.TaskServ.taskDelete(this.Task.taskID!);
  }

  SendUpdate() {
    this.TaskServ.taskUpdate(this.Task.taskID!);
  }
}
