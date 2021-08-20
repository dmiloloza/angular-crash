import {Injectable} from '@angular/core';
import {Task} from '../Task';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksCollection?: AngularFirestoreCollection<Task>;
  snap!: Observable<Task[]>;

  constructor(
    private afs: AngularFirestore
  ) {

  }

  getTasks(): void {

  }

  deleteTask(task: Task): void {
   
  }

  updateTaskReminder(task: Task): void {

  }

  addTask(task: Task): void {
    this.afs.collection('tasks').add(task);
  }
}
