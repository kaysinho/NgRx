import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri: string = "https://reqres.in/api";
  constructor(private http: HttpClient) { 

  }

  get(){
    return this.http.get(`${this.uri}/users?per_page=6`).pipe(map( (resp:any) => resp.data));  
  }

  getById(id:string){
    return this.http.get(`${this.uri}/users/${id}`).pipe(map( (resp:any) => resp.data));  
  }
}
