import { createAction, props } from "@ngrx/store";

export type filters = 'ALL' | 'COMPLETED'| 'PENDING' ;
export const setFilter = createAction('[Filter] Set Filter', props<{ filter: filters }>())