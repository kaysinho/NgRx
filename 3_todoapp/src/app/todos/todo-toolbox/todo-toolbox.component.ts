import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { filters, setFilter } from 'src/app/filter/filter.actions';
import { clear } from '../todo.actions';

@Component({
  selector: 'app-todo-toolbox',
  templateUrl: './todo-toolbox.component.html',
  styleUrls: ['./todo-toolbox.component.css']
})
export class TodoToolboxComponent implements OnInit {
  filter : filters = "ALL";
  filters : Array<filters> = ["ALL", "PENDING", "COMPLETED"]
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('filters').subscribe( filter => this.filter = filter);
  }

  clear(){
    this.store.dispatch(clear())
  }

  setFilter(_filter: filters){
    this.filter = _filter;
    this.store.dispatch(setFilter({ filter: this.filter}))
  }

}
