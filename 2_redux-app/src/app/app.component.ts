import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.interfaces';
import { decrement, increment } from './counter/counter.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number;

  constructor(private store:Store<AppState>){
    this.counter = 0;
    this.store.select('counter').subscribe( counter => this.counter = counter);
  }

  increase(){
    this.store.dispatch(increment())
  }

  decrease(){
    this.store.dispatch(decrement())

  }
}
