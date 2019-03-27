export class User{
    name:String;
    verified:boolean;
    avatar: String;
    role: String;
    constructor(user:any){
        this.name = user.name;
        this.verified = user.verified;
        this.avatar = user.avatar;
        this.role = user.role;
    }
}