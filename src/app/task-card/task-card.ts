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

  @Output() DeleteEvent: EventEmitter<Task> = new EventEmitter();

  DeleteTask() {
    this.DeleteEvent.emit(this.Task as Task);
  }
}
