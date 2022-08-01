export class UserModel {

    static fromFirebase(user: any){
        return new UserModel(user.uid, user.name, user.email)
    }
    constructor (public uid: string, public name: string, public email: string){
        
    }
}