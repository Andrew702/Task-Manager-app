import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { TaskInput } from './task-input/task-input';
import { TaskList } from './task-list/task-list';
import { Footer } from './footer/footer';
import { Carousel } from './carousel/carousel';

@Component({
  selector: 'app-root',
  imports: [Header, TaskInput, TaskList, Footer, Carousel],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('lab01');
}
