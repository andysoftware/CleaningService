import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {Config} from '../config.endpoints';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  public users:  AngularFirestoreCollection<User>;;
  public config : Config;
  public usersDoc: AngularFirestoreDocument<User>;
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }
  addUser(user: User): void {
    //Add the user to the collection
    user = new User("hello","hello","hello","hello","hello");
    this.users.add(user);
  } //addUser
  updateUser(id, update): void {
    //Get the user document
    this.usersDoc = this.db.doc<User>(`${this.config.usersEndPoint}/${id}`);
    this.usersDoc.update(update);
  } //updateUser
  deleteTask(id: Number): void {
    //Get the task documen
    this.usersDoc = this.db.doc<User>(`${this.config.usersEndPoint}/${id}`);
    //Delete the document
    this.usersDoc.delete();
  } //deleteUser


}
