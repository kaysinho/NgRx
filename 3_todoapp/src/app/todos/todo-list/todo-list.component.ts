import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { filters } from 'src/app/filter/filter.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];
  filter : filters = 'ALL';
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( store => {
      this.todos = store.todos;
      this.filter = store.filters;
    })
  }

}
