import { Action } from "../ngrx_fake/ngrx";

export function reducer( state = 10, action: Action){
    switch(action.type){
        case "Increase" : return state += 1;
        case "Decrease" : return state -= 1;
        case "Multiply" : return state * action.payload;
        case "Split" : return state / action.payload;
        case "Reset" : return state = 0;
        default: return state;
    }
}