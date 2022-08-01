import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GlobalState } from './app.reducer';
import { AuthService } from './services/auth.service';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard';
  subscription: Subscription = new Subscription();

  constructor(private authService:AuthService, private store: Store<GlobalState>){
    this.authService.initAuthListener();
    
    this.subscription = this.store.select('ui').subscribe( ui => {
        if (ui.isLoading){
          Notiflix.Loading.standard();
        }else{
          Notiflix.Loading.remove()
        }
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
