import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Subscription } from '../models/subscription';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedUser:User = null;
  private sub:Subscription = null;
  

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

  isLogged() {
    if (this.loggedUser == null) {
      return false
    } else {
      return true;
    }
  }
  getUser():User {
    return this.loggedUser;
  }

  setUser(user:User) {
    this.loggedUser = user;
  }
  
  subscribe(channelId:number) {
    this.sub.channel = 0;
    this.sub.channel = channelId;
    this.sub.user = this.loggedUser.id;
    return this.http.post(this.serverUrl + "users/subscribe", this.sub);
  }

}
