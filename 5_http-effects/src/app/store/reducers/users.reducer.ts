import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUsers, loadUsersPayload, loadUsersSuccess } from '../actions';

export interface UsersState {
    users: Array<User>,
    loaded: boolean,
    loading: boolean,
    error: any
}

const initialState: UsersState = {
   users: [],
   loaded: false,
   loading: false,
   error: null
}

const _usersReducer = createReducer(initialState,

    on(loadUsers, state => ({ ...state, loading: true})),
    on(loadUsersSuccess, (state, { users }) => ({ ...state, loading: false, loaded: true, users: [... users]})),
    on(loadUsersPayload, (state, { payload }) => ({ ...state, loading: false, loaded: false, error: payload})),


);

export function usersReducer(state: any, action: Action) {
    return _usersReducer(state, action);
}