import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Customer } from '../Customer';
import { CustomerComponent } from './customer.component';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('tesitng if customer is created properly', () => {
    const id:String = '0';
    let name:String = 'CustomerName';
    let avatar:String = 'CustomerAvatar';
    let role: String = 'customer';
    let description : String ='CustomerDescription'
    const customer:Customer = {id, name, role, avatar, description};
	expect(customer.id).toEqual(id);
	expect(customer.name).toEqual(name);
	expect(customer.avatar).toEqual(avatar);
	expect(customer.role).toEqual(role);
	expect(customer.description).toEqual(description);
  });
});
