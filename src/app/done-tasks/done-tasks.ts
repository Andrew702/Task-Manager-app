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
