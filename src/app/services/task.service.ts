import {Injectable} from '@angular/core';
import {Task} from '../Task';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksCollection?: AngularFirestoreCollection<Task>;
  snap: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.snap = this.afs.collection('tasks').valueChanges();
  }

  getTasks() {
    return this.snap;
  }

  deleteTask(task: Task): void {

  }

  updateTaskReminder(task: Task): void {

  }

  addTask(task: Task) {
    // this.afs.collection('tasks').doc().set(task);
  }
}
