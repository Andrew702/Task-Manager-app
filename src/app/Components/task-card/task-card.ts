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
  @Input() CurrTask: Task | null = null;

  TaskServ = inject(Taskmanager);

  TaskDoneChanged() {
    if (this.CurrTask) this.TaskServ.taskMarkDoneToggle(this.CurrTask.id);
  }

  DeleteTask() {
    if (this.CurrTask) this.TaskServ.taskDelete(this.CurrTask.id);
  }

  SendUpdate() {
    if (this.CurrTask) this.TaskServ.taskUpdate(this.CurrTask.id);
  }
}
