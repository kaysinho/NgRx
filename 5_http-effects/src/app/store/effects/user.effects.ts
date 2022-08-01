import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { loadUser, loadUserPayload, loadUserSuccess } from "../actions";

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private usersService:UserService){}

    loadUser$ = createEffect(
        ()=> this.actions$.pipe(ofType(loadUser), mergeMap(
            (action)=> this.usersService.getById(action.id).pipe(
                map(user=> loadUserSuccess({ user })),
                catchError( err => of (loadUserPayload({ payload: err})))
                ))
        ))
}