import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../app';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-all-tasks',
  imports: [TaskCard],
  templateUrl: './all-tasks.html',
  styleUrl: './all-tasks.css',
})
export class AllTasks {
  @Input() TaskArr: Task[] = [];

  @Output() DeleteEvent: EventEmitter<Task> = new EventEmitter();
  //only propagate upwards
  DeleteTask(Tasktodelete: Task) {
    this.DeleteEvent.emit(Tasktodelete);
  }
}
