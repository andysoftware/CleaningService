import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('testing order of buttons', () => {
    expect(component.contactContents[0]).toEqual({type:'text',placeHolder:'Service Name',requiredName:'Name'});
    expect(component.contactContents[1]).toEqual({type:'number',placeHolder:'How many times',requiredName:'Quantity'});
    expect(component.contactContents[2]).toEqual({type:'datetime-local',placeHolder:'Date and Time',requiredName:'Date'});
    expect(component.contactContents[3]).toEqual({type:'text',placeHolder:'Message \special requriements',requiredName:'Message'});
  });
});
