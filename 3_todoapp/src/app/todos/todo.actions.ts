import { createAction, props } from '@ngrx/store';

export const add = createAction('[Todo] Add', props<{ text: string}>());
export const update = createAction('[Todo] Update', props<{ id: number}>());
export const edit = createAction('[Todo] Edit', props<{ id: number, text: string }>());
export const remove = createAction('[Todo] Remove', props<{ id: number }>());
export const clear = createAction('[Todo] Clear');