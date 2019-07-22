import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged:boolean = false;

  serverUrl = "http://localhost:8090/"

  constructor(private http: HttpClient, private router: Router) { }

  list(){
    return this.http.get<User[]>(this.serverUrl + "users");
  }

  register(user:User){
    console.log("user service print out" + user);
    return this.http.post( this.serverUrl + 'users', user );
  }

  login(email:string,password:string){
    if(email == null || password == null){
      console.log("You are not logged in");
      this.router.navigate(['login']);
    }
    let user = { "email": email, "password": password};
    return this.http.post(this.serverUrl + "users/login", user);
  }

  delete(id:number){
    return this.http.delete( this.serverUrl + "users/"+ id);
  }

  findOne(id:number){
    return this.http.get<User>( this.serverUrl + "users/"+ id);
  }

  getLogged() {
    return this.isLogged
  }

  setLogged(input:boolean) {
    this.isLogged = input;
  }
  
}
