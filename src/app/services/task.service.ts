import {Injectable} from '@angular/core';
import {Task} from '../Task';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private afs: AngularFirestore) {
  }

  getTasks() {
    return this.afs.collection<Task>('tasks').valueChanges({idField: 'id'});
  }

  deleteTask(task: Task) {
    return this.afs.collection('tasks').doc(task.id).delete();
  }

  updateTaskReminder(task: Task) {
    this.afs.collection('tasks').doc(task.id).update({reminder: task.reminder});
  }

  addTask(task: Task) {
    this.afs.collection('tasks').add(task);
  }
}
