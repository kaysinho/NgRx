import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as Notiflix from 'notiflix';
import { filter, Subscription } from 'rxjs';
import { GlobalState } from 'src/app/app.reducer';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  userSuscription: Subscription = new Subscription();
  user : UserModel = new UserModel("", "", "")
  constructor(private authService:AuthService, private router:Router, private store: Store<GlobalState>) { }

  ngOnInit(): void {
    this.userSuscription = this.store.select('user')
    .pipe( filter( auth => auth.user !== null))
    .subscribe( ({ user } : any) => this.user = user)
  }

  ngOnDestroy(): void {
    this.userSuscription.unsubscribe();
  }

  logOut(){
    Notiflix.Loading.standard();
    this.authService.signOut().then( data=>{
      this.router.navigate(['/auth'])
    }).finally( () =>{
      Notiflix.Loading.remove()
    })
  }
}
