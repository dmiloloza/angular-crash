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

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task);
  }

  addTask(task: Task): void {
    this.taskService.addTask(task);
  }
}
