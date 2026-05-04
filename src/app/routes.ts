import { Routes } from '@angular/router';
import { Carousel } from './carousel/carousel';
import { Main } from './layouts/main/main';
import { Notfound } from './notfound/notfound';
import { Auth } from './layouts/auth/auth';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { TaskInput } from './task-input/task-input';
import { TaskList } from './task-list/task-list';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: Main,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: Carousel,
      },
      {
        path: 'addtask',
        component: TaskInput,
      },
      {
        path: 'tasklist',
        component: TaskList,
      },
      // {
      //   path: "**",
      //   redirectTo:"/"
      // }
    ],
  },
  {
    path: 'auth',
    component: Auth,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'signup',
        component: Signup,
      },
    ],
  },
  {
    path: '**',
    component: Notfound,
  },
];
