import { inject, Injectable, signal } from '@angular/core';
import { Task } from '../app';
import { Router } from '@angular/router';
import { TaskApi } from './task-api';
import { CurrencyPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Taskmanager {
  Tasks = signal<Task[]>([]); //make task arr as signal
  CurrEditTask!: Task;
  editingFlag: boolean = false;

  router = inject(Router);
  taskApi = inject(TaskApi);

  //addtasks
  addTask(_Task: Task) {
    this.Tasks.set([...this.Tasks(), _Task]);
  }

  getAllTasksLocal(): Task[] {
    // console.log('get all local', [...this.Tasks()]);
    return [...this.Tasks()];
  }

  taskMarkDoneToggle(_tId: string) {
    const CurrEditTask = this.Tasks().find((Task) => Task.id === _tId);
    if (CurrEditTask) {
      CurrEditTask.taskdone = !CurrEditTask.taskdone;
      this.taskApi.updateTask(CurrEditTask);
    }
  }

  taskDelete(_tId: string) {
    this.Tasks.set(this.Tasks().filter((Task) => Task.id != _tId));
    this.taskApi.deleteTask(_tId);
  }

  taskUpdate(_tId: string) {
    this.editingFlag = true;
    this.CurrEditTask = this.Tasks().find((Task) => Task.id === _tId)!;
    this.router.navigate(['/main', 'addtask']);
  }

  pullChanges(_Task: Task) {
    console.log(_Task);
    this.Tasks.set(
      this.Tasks().map(function (__Task) {
        if (__Task.id == _Task.id) return _Task;
        else return __Task;
      }),
    );
  }

  getAllTasksRemote() {
    this.taskApi.getAllTasks().subscribe((taskArr) => {
      this.Tasks.set([...taskArr]);
      console.log(this.Tasks());
    });
  }
}
