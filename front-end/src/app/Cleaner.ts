import { User } from './User';
export class Cleaner extends User{
	
    constructor(cleaner:any){
		super(cleaner);
		this.role = "cleaner";
    }
}