import { Action } from '../ngrx_fake/ngrx'

export const actionIncreaser : Action = {
    type: "Increase"
}

export const actionDecreaser : Action = {
    type: "Decrease"
}

export const actionMultiplier : Action = {
    type: "Multiply",
    payload: 2
}

export const actionSplitter : Action = {
    type: "Split",
    payload: 2
}

export const actionReset : Action = {
    type: "Reset"
}