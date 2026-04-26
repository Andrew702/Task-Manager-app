import { Component } from '@angular/core';
import { TaskCardCompClass } from '../TaskCardComp/TaskCardComp';

@Component({
  selector: 'TaskList',
  templateUrl: './TaskListComp.html',
  styleUrl: './TaskListComp.css',
  imports: [TaskCardCompClass],
})
export class TaskListCompClass {}
