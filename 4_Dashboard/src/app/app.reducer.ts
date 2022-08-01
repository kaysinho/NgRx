import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import * as UI from './shared/ui.reducer';
import * as auth from './auth/auth.reducer';
import * as incomeExpense from './income-expenses/income-expense.reducer';



export interface GlobalState {
    ui: UI.State; 
    user: auth.State;
    incomeExpense: incomeExpense.State;
}


export const appReducers: ActionReducerMap<GlobalState> = {
    ui: UI.uiReducer,
    user: auth.authReducer,
    incomeExpense: incomeExpense.incomeExpenseReducer
}