import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../app';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})
export class TaskInput {
  CurrTask: Partial<Task> = {};
  @Output() TaskOutEvent = new EventEmitter<Task>();

  Display() {
    console.log(`
      Title ${this.CurrTask.tasktitle}
      Description ${this.CurrTask.taskdescription}
      priority ${this.CurrTask.taskpriority}
      duedate ${this.CurrTask.taskduedate}
      category ${this.CurrTask.taskcategory}
      `);
  }

  AddTask() {
    this.CurrTask.taskID = uuidv4();
    //tobedone if (!this.validateData())
    this.TaskOutEvent.emit(this.CurrTask as Task);
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
