import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userId:number;

  user:User;
  
  constructor(private userService: UserService, private route:ActivatedRoute, private router:Router) {
     this.route.params.subscribe ( params => {
       console.log(params);
       this.userId = +params['id'];
       console.log('Id:' , this.userId);
     });
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    this.userService.findOne(this.userId).subscribe( (res)=>{
      this.user = res;
    })
  }

  delete(id: number) {
    console.log("Delete User", id);
    this.userService.delete(id).subscribe((res) => {
      console.log(res);      
      this.router.navigate(['listusers']);
    });
  }
}
