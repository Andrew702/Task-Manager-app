import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../../app';

@Component({
  selector: 'app-all-tasks',
  imports: [TaskCard],
  templateUrl: './all-tasks.html',
  styleUrl: './all-tasks.css',
})
export class AllTasks {
  @Input() TaskArr: Task[] = [];

  @Output() DeleteEvent: EventEmitter<string> = new EventEmitter();
  @Output() DoneChangedEvent: EventEmitter<string> = new EventEmitter();

  @Output() SendUpdateEvent: EventEmitter<Task> = new EventEmitter();
  @Output() PullUpdateEvent: EventEmitter<null> = new EventEmitter();
  //only propagate upwards
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
