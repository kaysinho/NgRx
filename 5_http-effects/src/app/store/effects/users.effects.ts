import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { loadUsers, loadUsersPayload, loadUsersSuccess } from "../actions";

@Injectable()
export class UsersEffects {
    constructor(private actions$: Actions, private usersService:UserService){}

    loadUsers$ = createEffect(
        ()=> this.actions$.pipe(ofType(loadUsers), mergeMap(
            ()=> this.usersService.get().pipe(
                map(users=> loadUsersSuccess({ users })),
                catchError( err => of (loadUsersPayload({ payload: err})))
                ))
        ))
}