import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUser = createAction('[Users] Load User', props<{ id: string }>());
export const loadUserSuccess = createAction('[Users] Load User Success', props<{ user: User}>());
export const loadUserPayload = createAction('[Users] Load User Payload', props<{ payload: any}>());