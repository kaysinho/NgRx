import { Component } from '@angular/core';
import { AppState } from './store/app.reducer';
import { Store } from '@ngrx/store';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store<AppState>) {
    this.store.select('users').subscribe((data: any) => {
      if (data.loading) {
        Notiflix.Loading.dots();
      }

      if (data.error) {
        Notiflix.Loading.remove()
        console.log(data.error)
        Notiflix.Notify.failure(data.error.message);
      }

      Notiflix.Loading.remove(500);
    });

    this.store.select('user').subscribe((data: any) => {
      if (data.loading) {
        Notiflix.Loading.dots();
      }

      if (data.error) {
        Notiflix.Loading.remove()
        console.log(data.error)
        Notiflix.Notify.failure(data.error.message);
      }

      Notiflix.Loading.remove(500);
    });
  }
}
