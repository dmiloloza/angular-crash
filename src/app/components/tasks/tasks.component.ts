import {Component, OnInit} from '@angular/core';
import {Task} from '../../Task';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
  ) {
  }

  ngOnInit() {

  }

  deleteTask(task: Task) {

  }

  toggleReminder(task: Task) {

  }

  addTask(task: Task): void {
    this.taskService.addTask(task);
  }
}
