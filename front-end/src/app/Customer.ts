import { User } from './User';
export class Customer extends User{
	
    constructor(customer:any){
		super(customer);
		this.role = 'customer';
    }
}