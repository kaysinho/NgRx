import { Action, createReducer, on } from "@ngrx/store";
import { decrement, increment, multiply, reset, split } from "./counter.actions";

/*export function reducer(state: number = 10, action: Action){
    switch(action.type){
        case increment.type:  return state + 1;
        case decrement.type:  return state - 1;
        default: return state;
    }
}*/

export const initialState = 20;

export const reducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiply, (state, { num }) => state * num),
  on(split, (state, { num }) => state / num),
  on(reset, (state) => 0)

);