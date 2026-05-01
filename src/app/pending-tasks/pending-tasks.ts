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

  @Output() DeleteEvent: EventEmitter<string> = new EventEmitter();
  @Output() DoneChangedEvent: EventEmitter<string> = new EventEmitter();

  @Output() SendUpdateEvent: EventEmitter<Task> = new EventEmitter();
  @Output() PullUpdateEvent: EventEmitter<null> = new EventEmitter();

  DeleteTask(TaskID: string) {
    this.DeleteEvent.emit(TaskID);
  }

  DoneChanged(TaskID: string) {
    this.DoneChangedEvent.emit(TaskID);
  }
  SendUpdate(TasktoUpdate: Task) {
    this.SendUpdateEvent.emit(TasktoUpdate);
  }

  PullUpdate() {
    this.PullUpdateEvent.emit();
  }
}
