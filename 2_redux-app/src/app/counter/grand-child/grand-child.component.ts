import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.interfaces';
import { reset } from '../counter.actions';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent implements OnInit {
  counter: number = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe( counter => this.counter = counter)
  }

  reset(){
    this.store.dispatch(reset())
  }

}
