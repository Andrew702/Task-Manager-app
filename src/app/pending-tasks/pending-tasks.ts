import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../app';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-pending-tasks',
  imports: [TaskCard],
  templateUrl: './pending-tasks.html',
  styleUrl: './pending-tasks.css',
})
export class PendingTasks {
  @Input() TaskArr: Task[] = [];

  @Output() DeleteEvent: EventEmitter<Task> = new EventEmitter();
  DeleteTask(Tasktodelete: Task) {
    this.DeleteEvent.emit(Tasktodelete);
  }
}
