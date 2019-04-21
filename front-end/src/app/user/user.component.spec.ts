import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { AngularFirestore } from '@angular/fire/firestore';

describe('UserComponent', () => {
  let afs: AngularFirestore;
  let component: UserComponent = new UserComponent(afs);
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports:[ AngularFirestore ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create a new User Dora ', () => {
    component.users.subscribe((users) => {
      let currLength = users.length;
      component.addUserData();
      component.users.subscribe((addedUsers) => {
        expect(currLength+1).toEqual(addedUsers.length);
      });
    })
  });
});
