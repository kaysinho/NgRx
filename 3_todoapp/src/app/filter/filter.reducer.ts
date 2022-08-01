import { Action, createReducer, on } from "@ngrx/store";
import { filters, setFilter } from "./filter.actions";

export const initialState: filters = 'ALL';

export const filterReducer = createReducer<filters, Action>(initialState, 
        on(setFilter, (state: filters, { filter }) => filter )
    );