import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUser, loadUserPayload, loadUserSuccess } from '../actions';

export interface UserState {
  id: string;
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  id: '',
  user: new User("","","","",""),
  loaded: false,
  loading: false,
  error: null,
};

const _userReducer = createReducer(
  initialState,

  on(loadUser, (state, { id }) => ({ 
    ...state, 
    loading: true,
    id: id
})),
  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {...user},
  })),
  on(loadUserPayload, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);

export function userReducer(state: any, action: Action) {
  return _userReducer(state, action);
}
