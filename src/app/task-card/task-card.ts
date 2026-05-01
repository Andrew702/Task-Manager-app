import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../app';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input() Task: Partial<Task> = {};

  @Output() DeleteEvent: EventEmitter<string> = new EventEmitter();

  @Output() DoneChangedEvent: EventEmitter<string> = new EventEmitter();

  @Output() SendUpdateEvent: EventEmitter<Task> = new EventEmitter();
  @Output() PullUpdateEvent: EventEmitter<Task> = new EventEmitter();

  TaskDoneChanged() {
    this.DoneChangedEvent.emit(this.Task.taskID);
  }

  DeleteTask() {
    this.DeleteEvent.emit(this.Task.taskID);
  }

  SendUpdate() {
    this.SendUpdateEvent.emit(this.Task as Task);
  }

  PullUpdate() {
    this.PullUpdateEvent.emit();
  }
}
