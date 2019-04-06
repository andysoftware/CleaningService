export class User{
    id: String;
    name:String;
    avatar: String;
    role: String;
    description:String;
	
	constructor(user:any){
		this.id = user.id;
		this.name = user.name;
		this.avatar = user.avatar;
		this.description = user.description;
    }
}