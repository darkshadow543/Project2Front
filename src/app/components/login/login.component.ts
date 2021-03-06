import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id:number;
  userName:string;
  email:string;
  password:string;
  isYoutuber:boolean = false;

  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  login(){
     this.userService.login(this.email, this.password).subscribe ( (res)=>{
      
    
      let user = new User();

      let userObj = JSON.stringify(res);
      sessionStorage.setItem('user', `${userObj}`)
       
      console.log(user);
       if(res != null) {
         console.log(user);
         console.log(sessionStorage.getItem('user'));
         this.invalidLogin = false;
         sessionStorage.setItem('userId', `${user.id}`);
         this.router.navigate(['home']);
       } else {
         this.invalidLogin = true;
         alert(this.errorMessage);
         this.router.navigate(['login']);
       }
     });
  }
}
