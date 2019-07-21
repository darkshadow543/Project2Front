import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user:User = new User();
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register(){    
    console.log("User register TS : ", this.user);
    this.userService.register(this.user).subscribe ( (res)=>{
      console.log(res);
      this.router.navigate(['login']);
    });
  }
}
