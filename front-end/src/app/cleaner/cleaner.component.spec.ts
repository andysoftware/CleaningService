import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Cleaner } from '../Cleaner';
import { CleanerComponent } from './cleaner.component';

describe('CleanerComponent', () => {
  let component: CleanerComponent;
  let fixture: ComponentFixture<CleanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const id:String = '0';
    let name:String = 'CleanerName';
    let avatar:String = 'CleanerAvatar';
    let role: String = 'cleaner';
    let description : String ='CleanerDescription'
    const cleaner:Cleaner = {id, name, role, avatar, description};
	expect(cleaner.id).toEqual(id);
	expect(cleaner.name).toEqual(name);
	expect(cleaner.avatar).toEqual(avatar);
	expect(cleaner.role).toEqual(role);
	expect(cleaner.description).toEqual(description);
  });
});
