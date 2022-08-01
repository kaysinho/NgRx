import { actionDecreaser, actionIncreaser, actionMultiplier, actionReset, actionSplitter } from "./counter/counter.actions";
import { reducer } from "./counter/counter.reducer";
import { Action, Reducer } from "./ngrx_fake/ngrx";

class Store<T>{
    constructor (private reducer: Reducer<T>, private state: T){

    }

    getState(){
        return this.state;
    }

    dispatch(action: Action){
        this.state = this.reducer(this.state, action)
    }
}


const store =  new Store(reducer, 10)

store.dispatch(actionIncreaser);

console.log(store.getState())
