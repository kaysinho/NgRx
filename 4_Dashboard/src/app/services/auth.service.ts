import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, authState, User } from '@angular/fire/auth';
import { Firestore, doc, collection, query, where, getDoc, getDocs } from '@angular/fire/firestore'
import { setDoc } from '@firebase/firestore';
import { Store } from '@ngrx/store';
import { map, subscribeOn, Subscription } from 'rxjs';
import { GlobalState } from '../app.reducer';
import * as AuthActions from '../auth/auth.actions';
import { unsetItems } from '../income-expenses/income-expense.actions';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: UserModel = new UserModel("", "",  "");
  get user() {
    return {... this._user };
  }
  constructor(public auth: Auth, public firestore: Firestore, private store: Store<GlobalState>) { }

  initAuthListener(){
    authState(this.auth).subscribe( data => {
      const userRef = collection(this.firestore, "user")
      if (data){
        const q = query(userRef, where("uid", "==", data.uid))
        getDocs(q).then( (users:any) => {
          const tempUser = UserModel.fromFirebase(users.docs[0].data())
          this._user = tempUser;
          this.store.dispatch( AuthActions.setUser({ user: tempUser }))
        });
      } else {
        this._user = new UserModel("", "",  "")
        this.store.dispatch( AuthActions.unsetUser())
        this.store.dispatch( unsetItems())
      }
    })
  }
  createUser(name: string, email: string, password:string){
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then( ({ user }) => {
        const _user = new UserModel( user.uid, name, email);
        const userRef = doc(collection(this.firestore, "user"));
        return setDoc( userRef, {... _user});
      })
  }

  login(email: string, password:string){
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  signOut(){
    return signOut(this.auth).then( () =>{
      this.store.dispatch( AuthActions. unsetUser())
    })
  }

  isAuth(){
    return authState(this.auth).pipe(map( fUser => fUser!== null));
  }
}
