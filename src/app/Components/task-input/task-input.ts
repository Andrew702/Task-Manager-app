import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../app';
import { v4 as uuidv4 } from 'uuid';
import { Title } from '@angular/platform-browser';
import { Taskmanager } from '../../Services/taskmanager';
import { Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-task-input',
  imports: [ReactiveFormsModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})
export class TaskInput {
  CurrTask: Task = {
    taskID: '',
    tasktitle: '',
    taskdescription: '',
    taskcategory: '',
    taskdone: false,
    taskduedate: '',
    taskpriority: '',
  };

  TaskServ = inject(Taskmanager);
  router = inject(Router);
  form!: FormGroup;

  constructor() {
    if (this.TaskServ.editingFlag == true) {
      this.CurrTask = { ...this.TaskServ.CurrEditTask };
    }
    this.form = new FormGroup({
      Title: new FormControl(this.CurrTask.tasktitle, Validators.required),
      Description: new FormControl(this.CurrTask.taskdescription, Validators.required),
      Priority: new FormControl(this.CurrTask.taskpriority, Validators.required),
      DueDate: new FormControl(this.CurrTask.taskduedate, Validators.required),
      Category: new FormControl(this.CurrTask.taskcategory, Validators.required),
    });
  }

  Submit() {
    this.CurrTask = {
      taskID: uuidv4(),
      tasktitle: this.form.controls['Title'].value == null ? '' : this.form.controls['Title'].value,
      taskdescription:
        this.form.controls['Description'].value == null
          ? ''
          : this.form.controls['Description'].value,
      taskcategory:
        this.form.controls['Category'].value == null ? '' : this.form.controls['Category'].value,
      taskdone: false,
      taskduedate:
        this.form.controls['DueDate'].value == null ? '' : this.form.controls['DueDate'].value,
      taskpriority:
        this.form.controls['Priority'].value == null ? '' : this.form.controls['Priority'].value,
    };

    if (this.TaskServ.editingFlag === true) {
      this.CurrTask.taskID = this.TaskServ.CurrEditTask.taskID;
      this.TaskServ.pullChanges(this.CurrTask);
      this.TaskServ.editingFlag = false;
      this.router.navigate(['/main', 'tasklist']);
    } else {
      this.TaskServ.addTask(this.CurrTask);
    }
  }
}
