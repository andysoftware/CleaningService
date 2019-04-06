import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {User} from '../User';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Observable<User[]>;
  private usersCollection: AngularFirestoreCollection<User>;
  constructor(private readonly afs: AngularFirestore) {
    this.usersCollection = this.afs.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
  }

  ngOnInit() {

  }
  onSubmit(user:User): void{
    console.log(user);
  }
  addUserData() {
    const id = this.afs.createId();
    let name:String = 'Dora';
    let avatar:String = 'Dorka';
    let role: String = 'Dora';
    let description : String ='Dora'
    const user :User = { id, name,avatar,role,description };
    this.usersCollection.doc(id).set(user);
  }

}
