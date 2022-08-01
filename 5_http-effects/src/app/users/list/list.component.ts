import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: Array<User> = [];
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.getUsers()
  }
  
  getUsers(){
    this.store.dispatch( loadUsers())
    this.store.select('users').subscribe( ( data:any ) => this.users = data.users)
  }

}
