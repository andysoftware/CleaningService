import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test the info bar', () => {
    expect(component.infos[0]).toEqual({inf: '1298374@gmail.com',name:'Email'});
    expect(component.infos[1]).toEqual({inf: '+362121111',name:'Phone'});
    expect(component.infos[2]).toEqual({inf: 'Cleaning Service Ltd., 1133 Budapest, Hungary',name:'Address'});
    expect(component.infos[3]).toEqual({inf: '42.111,45.7789',name:'Geo-Location'});
  });
});
