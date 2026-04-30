import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../app';
import { AllTasks } from '../all-tasks/all-tasks';
import { DoneTasks } from '../done-tasks/done-tasks';
import { PendingTasks } from '../pending-tasks/pending-tasks';
@Component({
  selector: 'app-task-list',
  imports: [AllTasks, DoneTasks, PendingTasks, TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() TaskArr: Task[] = [];
  Selection: 'All' | 'Pending' | 'Done' = 'All';

  @Output() DeleteEvent: EventEmitter<Task> = new EventEmitter();

  DeleteTask(Tasktodelete: Task) {
    this.DeleteEvent.emit(Tasktodelete);
  }
}
