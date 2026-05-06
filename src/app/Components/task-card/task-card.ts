import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../../app';
import { Taskmanager } from '../../Services/taskmanager';
import { NotificationService } from '../../Services/notification-service';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input() CurrTask: Task | null = null;

  TaskServ = inject(Taskmanager);
  notify = inject(NotificationService);

  TaskDoneChanged() {
    if (this.CurrTask) {
      this.TaskServ.taskMarkDoneToggle(this.CurrTask.id);
      this.notify.show({
        message: 'Task Done State Changed',
        type: 'info',
        duration: 2000,
      });
    }
  }

  DeleteTask() {
    if (this.CurrTask) {
      this.TaskServ.taskDelete(this.CurrTask.id);
      this.notify.show({
        message: 'Task Deleted',
        type: 'info',
        duration: 2000,
      });
    }
  }

  SendUpdate() {
    if (this.CurrTask) {
      this.TaskServ.taskUpdate(this.CurrTask.id);
      this.notify.show({
        message: 'Editing... Redirecting to task add page',
        type: 'info',
        duration: 2000,
      });
    }
  }
}
