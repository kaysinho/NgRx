import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import { actionIncreaser } from "./counter/counter.actions";
import { reducer } from "./counter/counter.reducer";

const store : Store = configureStore({reducer})

store.subscribe(()=>{
    console.log("Subs", store.getState())
})

store.dispatch(actionIncreaser)

