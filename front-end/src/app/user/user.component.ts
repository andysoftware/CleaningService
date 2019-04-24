import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../User';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: Observable<User[]>;
  private usersCollection: AngularFirestoreCollection<User>;
  constructor(private readonly afs: AngularFirestore) {
    console.log(`AFS:`, afs, ' Type: ', typeof afs);
    this.usersCollection = this.afs.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
  }
  public ngOnInit() {

  }
  public onSubmit(user: User): void {
    console.log(user);
  }
  public addUserData(name: String = 'Dora',
    avatar: String = 'Dorka',
    role: String = 'Dora',
    description: String = 'Dora') {
    const id = this.afs.createId();
    const user: User = { id, name, avatar, role, description };
    this.usersCollection.doc(id).set(user);
  }

}
