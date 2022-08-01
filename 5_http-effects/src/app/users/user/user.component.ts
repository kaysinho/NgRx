import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user : User = new User("","","","","")
  constructor(private activatedRoute:ActivatedRoute, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({ id }) => {
      this.store.dispatch(loadUser( { id}))
    })

    this.store.select('user').subscribe( (data:any)=> {
      this.user = data.user;
    })
  }

}
