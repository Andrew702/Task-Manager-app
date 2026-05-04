import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../app';
import { v4 as uuidv4 } from 'uuid';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task-input',
  imports: [ReactiveFormsModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})
export class TaskInput {
  @Input() CurrTask!: Task;
  @Output() CurrTaskChange = new EventEmitter();

  form = new FormGroup({
    Title: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),
    Priority: new FormControl('', Validators.required),
    DueDate: new FormControl('', Validators.required),
    Category: new FormControl('', Validators.required),
  });

  AddTask() {
    console.log(this.form);

    this.CurrTask = {
      taskID: '',
      taskdone: false,
      tasktitle: this.form.controls.Title.value!,
      taskdescription: this.form.get('Description')?.value!,
      taskcategory: this.form.controls.Category.value!,
      taskduedate: this.form.get('DueDate')?.value!,
      taskpriority: this.form.get('Priority')?.value!,
    };

    this.CurrTask.taskID = uuidv4();
    this.CurrTask.taskdone = false;
    //tobedone if (!this.validateData())
    this.CurrTaskChange.emit({ ...this.CurrTask } as Task); //send copy
  }

  validateData(): boolean {
    if (
      this.CurrTask.tasktitle == '' ||
      this.CurrTask.taskdescription == '' ||
      this.CurrTask.taskcategory == '' ||
      this.CurrTask.taskduedate == '' ||
      this.CurrTask.taskpriority == ''
    )
      return false;
    return true;
  }
}
