import { inject, Injectable } from '@angular/core';
import { Task } from '../app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Taskmanager {
  Tasks: Task[] = [];
  CurrEditTask!: Task;
  editingFlag: boolean = false;

  router = inject(Router);

  //addtasks
  addTask(_Task: Task) {
    this.Tasks = [...this.Tasks, _Task];
  }

  getAllTasks(): Task[] {
    return [...this.Tasks];
  }

  taskMarkDoneToggle(_tId: string) {
    const CurrEditTask = this.Tasks.find((Task) => Task.taskID === _tId);
    CurrEditTask!.taskdone = !CurrEditTask?.taskdone;
  }

  taskDelete(_tId: string) {
    this.Tasks = this.Tasks.filter((Task) => Task.taskID != _tId);
  }

  taskUpdate(_tId: string) {
    this.editingFlag = true;
    this.CurrEditTask = this.Tasks.find((Task) => Task.taskID === _tId)!;
    this.router.navigate(['/main', 'addtask']);
  }

  pullChanges(_Task: Task) {
    console.log(_Task);
    this.Tasks = this.Tasks.map(function (__Task) {
      if (__Task.taskID == _Task.taskID) return _Task;
      else return __Task;
    });
  }
}
