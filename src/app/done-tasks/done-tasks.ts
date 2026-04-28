import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../app';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-done-tasks',
  imports: [TaskCard],
  templateUrl: './done-tasks.html',
  styleUrl: './done-tasks.css',
})
export class DoneTasks {
  @Input() TaskArr: Task[] = [];

  @Output() DeleteEvent: EventEmitter<Task> = new EventEmitter();

  DeleteTask(Tasktodelete: Task) {
    this.DeleteEvent.emit(Tasktodelete);
  }
}
