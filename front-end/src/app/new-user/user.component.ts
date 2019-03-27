import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Config } from '../config.endpoints';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import {MatInputModule} from '@angular/material/input'; 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public config: Config = new Config();
  public user: User[];
  private users: AngularFirestoreCollection<User>;
  private usersDoc: AngularFirestoreDocument<User>;
  constructor(private db: AngularFirestore) {
    this.users = this.db.collection<User>(this.config.usersEndPoint);
  }

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
