import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../../app';
import { AllTasks } from '../all-tasks/all-tasks';
import { DoneTasks } from '../done-tasks/done-tasks';
import { PendingTasks } from '../pending-tasks/pending-tasks';
import { NotFoundError, Observable } from 'rxjs';
import { Taskmanager } from '../../Services/taskmanager';
import { TaskApi } from '../../Services/task-api';
@Component({
  selector: 'app-task-list',
  imports: [AllTasks, DoneTasks, PendingTasks],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  Selection: 'All' | 'Pending' | 'Done' = 'All';
  EditMode: boolean = false;
  TempTaskStorage!: Task;
  taskApiServ = inject(TaskApi);
  TaskServ = inject(Taskmanager);
  ngOnInit() {
    this.TaskServ.getAllTasksRemote();
  }
}
