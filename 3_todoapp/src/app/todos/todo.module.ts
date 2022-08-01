import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoToolboxComponent } from './todo-toolbox/todo-toolbox.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    TodoAddComponent,
    TodoItemComponent,
    TodoToolboxComponent,
    TodoListComponent,
    TodoCardComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoCardComponent
  ]
})
export class TodoModule { }
