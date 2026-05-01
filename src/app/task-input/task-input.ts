import { Component, EventEmitter, Output, Input } from '@angular/core';
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
  @Input() CurrTask!: Task;
  @Output() CurrTaskChange = new EventEmitter();

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
