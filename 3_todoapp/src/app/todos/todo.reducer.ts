import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { add, clear, edit, remove, update } from './todo.actions';

export const initialState: Array<Todo> = [];

export const todoReducer = createReducer(
  initialState,
  on(add, (state, { text }) => [...state, new Todo(text)]),
  on(clear, (state) => []),
  on(remove, (state, { id }) => state.filter(item => item.id !== id)),
  on(update, (state, { id }) => {
    return state.map(item => {
      if (item.id === id){
        return {
          ...item,
          completed : !item.completed
        }
      }else return item
    });
  }),
  on(edit, (state, { id, text }) => {
    return state.map(item => {
      if (item.id === id){
        return {
          ...item,
          text : text
        }
      }else return item
    });
  })

);