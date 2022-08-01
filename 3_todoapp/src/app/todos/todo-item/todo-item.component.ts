import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Todo } from '../models/todo.model';
import { update } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo("");
  chkCompleted : FormControl = new FormControl(this.todo.completed);
  txtInput : FormControl = new FormControl(this.todo.text, Validators.required);

  constructor(private store:Store<AppState>) { 
  }
  
  ngOnInit(): void {
    this.chkCompleted.valueChanges.subscribe( value => {
      this.store.dispatch(update({ id: this.todo.id}))
    })
  }

}
