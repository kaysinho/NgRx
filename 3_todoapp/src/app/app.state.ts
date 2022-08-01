import { ActionReducerMap } from "@ngrx/store";
import { filters } from "./filter/filter.actions";
import { filterReducer } from "./filter/filter.reducer";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";

export interface AppState{
    todos: Array<Todo>,
    filters: filters
}

export const APP_REDUCERS : ActionReducerMap<AppState> = {
    todos: todoReducer,
    filters: filterReducer
}