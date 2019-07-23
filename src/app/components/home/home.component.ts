import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/services/channel.service';
import { Router } from '@angular/router';
import { Channel } from 'src/app/models/channel';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService, private channelService: ChannelService, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.list();
    console.log(this.user);
  }
  
  channels: Channel[] =[];
  user:User;

  list() {
    for (let sub of this.user.subs) {
      this.channelService.findOne(sub.channel).subscribe((res) => {
        this.channels.push(res)
      });
    }
  }

  makeChannel(){
    this.router.navigate(['make-channel']);
  }
 
}
