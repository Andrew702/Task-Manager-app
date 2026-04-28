import { Component } from '@angular/core';
import { Task } from '../app';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  CurrTask: Partial<Task> = {};
}
