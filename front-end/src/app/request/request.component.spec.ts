import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Request } from '../Request';
import { RequestComponent } from './request.component';

describe('RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let name:String = 'RequestName';
    let suggestedPrice:number = 100;
    let finalPrice: number = 89;
    let areaToClean : String[] = ['living room', 'kitchen'];
    const request:Request = {name, suggestedPrice, finalPrice, areaToClean};
	expect(request.name).toEqual(name);
	expect(request.suggestedPrice).toEqual(suggestedPrice);
	expect(request.finalPrice).toEqual(request.finalPrice);
	expect(request.areaToClean).toEqual(areaToClean);
  });
});
