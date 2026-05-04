import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../../app';
import { AllTasks } from '../all-tasks/all-tasks';
import { DoneTasks } from '../done-tasks/done-tasks';
import { PendingTasks } from '../pending-tasks/pending-tasks';
import { NotFoundError } from 'rxjs';
@Component({
  selector: 'app-task-list',
  imports: [AllTasks, DoneTasks, PendingTasks],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnChanges {
  @Input() RecievedTask!: Task;
  @Output() RecievedTaskChange = new EventEmitter();

  TaskArr: Task[] = [];
  Selection: 'All' | 'Pending' | 'Done' = 'All';
  EditMode: boolean = false;
  TempTaskStorage!: Task;

  ngOnChanges(changes: SimpleChanges): void {
    const TaskChanges = changes['RecievedTask'];
    console.log(TaskChanges);
    if (TaskChanges.firstChange == false)
      if (TaskChanges.currentValue != TaskChanges.previousValue && this.EditMode == false)
        this.TaskArr.push({ ...this.RecievedTask });
  }

  //made only for binding purpose
  // when i send an update request to edit data
  OnRecievedTaskChange() {
    this.RecievedTaskChange.emit({ ...this.RecievedTask } as Task);
  }

  DeleteTask(TaskIDtodelete: string) {
    this.TaskArr = this.TaskArr.filter((Task) => Task.taskID != TaskIDtodelete);
  }

  DoneChanged(TaskIDtoDoneChange: string) {
    const CurrTask = this.TaskArr.find((Task) => Task.taskID === TaskIDtoDoneChange);
    CurrTask!.taskdone = !CurrTask?.taskdone;
  }

  //updates Happen here
  StartUpdate(TasktoUpdate: Task) {
    this.EditMode = true;
    this.TempTaskStorage = { ...this.RecievedTask };
    this.RecievedTask = { ...TasktoUpdate };
    this.OnRecievedTaskChange(); //emit the current task
  }

  FinishUpdate() {
    if (this.EditMode === false) return;
    console.log('this.FinishUpdate');

    //find current edited task using ID
    let UpdatedTask = this.TaskArr.find((Task) => Task.taskID === this.RecievedTask.taskID);
    if (UpdatedTask != undefined) {
      console.log('found', UpdatedTask);
      Object.assign(UpdatedTask, { ...this.RecievedTask });
    }
    // UpdatedTask = { ...this.RecievedTask };  //old invalid way of updating, errors because it reassigns reference to updated task
    console.log(this.TaskArr);
    Object.assign(this.RecievedTask, { ...this.TempTaskStorage }); //REstore old data //also uded object assign for same error
    this.EditMode = false;
  }
}
