import { Routes } from '@angular/router';
import { Main } from './layouts/main/main';
import { Carousel } from './Components/carousel/carousel';
import { TaskInput } from './Components/task-input/task-input';
import { TaskList } from './Components/task-list/task-list';
import { Auth } from './layouts/auth/auth';
import { Login } from './Components/login/login';
import { Signup } from './Components/signup/signup';
import { Notfound } from './Components/notfound/notfound';

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
