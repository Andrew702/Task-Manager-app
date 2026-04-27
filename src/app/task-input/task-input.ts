import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})
export class TaskInput {
  tasktitle: string = '';
  taskdescription: string = '';
  taskpriority: string = '';
  taskduedate: string = '';
  taskcategory: string = '';

  Display() {
    console.log(`
      Title ${this.tasktitle}
      Description ${this.taskdescription}
      priority ${this.taskpriority}
      duedate ${this.taskduedate}
      category ${this.taskcategory}
      `);
  }
}
