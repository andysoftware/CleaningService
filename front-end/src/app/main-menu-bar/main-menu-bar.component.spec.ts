import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainMenuBarComponent } from './main-menu-bar.component';
describe('MainMenuBarComponent', () => {
  let component: MainMenuBarComponent;
  let fixture: ComponentFixture<MainMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('testing order of buttons', () => {
    expect(component.menuItems[0]).toEqual({name:"Home",link:""});
    expect(component.menuItems[1]).toEqual({name:"Contact",link:""});
    expect(component.menuItems[2]).toEqual({name:"About",link:"about"});
  });

});
