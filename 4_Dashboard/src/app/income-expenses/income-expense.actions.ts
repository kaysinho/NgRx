import { createAction, props } from '@ngrx/store';
import { IncomeExpense } from '../models/income-expenses.model';

export const setItems = createAction('[Income Expense] Set Items', props<{ items: Array<IncomeExpense> }>());
export const unsetItems = createAction('[Income Expense] Unset Items');