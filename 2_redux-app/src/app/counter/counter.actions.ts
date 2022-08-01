import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter] Increment')
export const decrement = createAction('[Counter] Decrement')
export const multiply = createAction('[Counter] Multiply', props<{ num:number }>())
export const split = createAction('[Counter] Split', props<{ num:number }>())
export const reset = createAction('[Counter] Reset')
