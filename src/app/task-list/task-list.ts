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
import { Task } from '../app';
import { AllTasks } from '../all-tasks/all-tasks';
import { DoneTasks } from '../done-tasks/done-tasks';
import { PendingTasks } from '../pending-tasks/pending-tasks';
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
    const RecievedTaskChange = changes['RecievedTask'];
    console.log(RecievedTaskChange);
    if (RecievedTaskChange.firstChange == false)
      if (
        RecievedTaskChange.currentValue != RecievedTaskChange.previousValue &&
        this.EditMode == false
      )
        this.TaskArr.push({ ...this.RecievedTask });
  }

  //when i send an update request to edit data
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

  StartUpdate(TasktoUpdate: Task) {
    this.EditMode = true;
    this.TempTaskStorage = this.RecievedTask;
    this.RecievedTask = TasktoUpdate;
    this.OnRecievedTaskChange();
  }

  FinishUpdate() {
    this.EditMode = false;
    let UpdatedTask = this.TaskArr.find((Task) => Task.taskID === this.RecievedTask.taskID);
    UpdatedTask = { ...this.RecievedTask };
  }
}
