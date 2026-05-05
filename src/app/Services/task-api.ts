import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../app';
import { UrlCodec } from '@angular/common/upgrade';
import { Observable } from 'rxjs';

const URL: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class TaskApi {
  http = inject(HttpClient);

  getAllTasks() {
    console.log('getting task data from server');
    return this.http.get<Task[]>(URL + '/tasks');
  }

  addTask(_task: Task) {
    console.log(`adding to server ${_task}`);
    this.http.post(URL + '/tasks', _task).subscribe();
  }

  deleteTask(_taskID: string) {
    console.log(`deleting from server ${_taskID}`);
    this.http.delete(URL + `/tasks/${_taskID}`).subscribe();
  }

  updateTask(_task: Task) {
    console.log(`updating to server ${_task}`);
    this.http
      .put(URL + `/tasks/${_task.id}`, _task)
      .subscribe((updateddata) => console.log(updateddata));
  }
}
