import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as Notiflix from 'notiflix';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/app.reducer';
import * as UI from 'src/app/shared/ui.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  form : FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
  });
  loading: boolean = false;

  constructor(private authService: AuthService, private router:Router, private store: Store<GlobalState>) { }

  ngOnInit(): void {
  }

  create(){
    if (this.form.invalid) return;
    this.store.dispatch(UI.isLoading())

    const { name, email, password } = this.form.value;
    this.authService.createUser(name, email, password)
      .then( data => {
        this.store.dispatch(UI.stopLoading())
        this.router.navigate(['/'])
      }).catch(err => {
        this.store.dispatch(UI.stopLoading())
        Notiflix.Notify.failure(err.message);

      }).finally( () =>{
        this.store.dispatch(UI.stopLoading())
      })
  }

  ngOnDestroy(){
  }

}
