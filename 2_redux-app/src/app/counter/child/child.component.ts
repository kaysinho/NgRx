import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { multiply, split } from '../counter.actions';
import { AppState } from '../../app.interfaces'
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  counter: number = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe( counter => this.counter = counter)
  }

  multiply(){
    this.store.dispatch(multiply({ num: 2}))
  }

  split(){
    this.store.dispatch(split({ num : 2}))

  }

}
