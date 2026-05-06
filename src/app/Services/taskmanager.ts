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

  //Taskmanager aims to delegate the api operations to taskApi
  //while having the data stored and updated locally as well
  router = inject(Router);
  taskApi = inject(TaskApi);

  //addtasks
  addTask(_Task: Task) {
    this.Tasks.set([...this.Tasks(), _Task]); //add locally
    this.taskApi.addTask(_Task); //add remotely
  }

  getAllTasksLocal(): Task[] {
    return [...this.Tasks()];
  }

  getAllTasksRemote() {
    this.taskApi.getAllTasks().subscribe((taskArr) => {
      this.Tasks.set([...taskArr]);
      // console.log(this.Tasks());
    });
  }

  taskMarkDoneToggle(_tId: string) {
    const CurrEditTask = this.Tasks().find((Task) => Task.id === _tId);
    if (CurrEditTask) {
      CurrEditTask.taskdone = !CurrEditTask.taskdone;
      this.taskApi.updateTask(CurrEditTask); //update remote
    }
  }

  taskDelete(_tId: string) {
    this.Tasks.set(this.Tasks().filter((Task) => Task.id != _tId));
    this.taskApi.deleteTask(_tId); //update remote
  }

  taskUpdate(_tId: string) {
    //send task data to input page
    this.editingFlag = true;
    this.CurrEditTask = this.Tasks().find((Task) => Task.id == _tId)!;
    this.router.navigate(['/main', 'addtask']);
  }

  pullChanges(_Task: Task) {
    //put changes in local
    console.log(_Task);
    this.Tasks.set(
      this.Tasks().map((__Task) => {
        if (__Task.id == _Task.id) {
          this.taskApi.updateTask(_Task); //update in remote
          return _Task;
        } else return __Task;
      }),
    );
  }
}
