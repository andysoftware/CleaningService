export class User{
    id: String;
    name:String
    role: String;
    email: String;
    avatar:String;
    constructor(id:String,name:String,role:String,email:String,avatar:String){
        this.id = id;
        this.name = name;
        this.role = role;
        this.email = email;
        this.avatar = avatar;
    }
}