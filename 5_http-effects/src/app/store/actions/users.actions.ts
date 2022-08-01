import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction('[Users] Load Users Success', props<{ users: Array<User>}>());
export const loadUsersPayload = createAction('[Users] Load Users Payload', props<{ payload: any}>());