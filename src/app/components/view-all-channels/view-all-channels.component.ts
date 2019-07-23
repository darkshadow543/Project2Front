import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelService } from 'src/app/services/channel.service';
import { Channel } from 'src/app/models/channel';
import { userInfo } from 'os';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-all-channels',
  templateUrl: './view-all-channels.component.html',
  styleUrls: ['./view-all-channels.component.css']
})
export class ViewAllChannelsComponent implements OnInit {

  viewedChannel:Channel;
  constructor(private channelService: ChannelService, private userService, private router: Router) { }

  ngOnInit() {
    this.list();
  }

  channels: Channel[];

  list() {
    this.channelService.list().subscribe((res) => {
      console.log(res);
      this.channels = res;
    });
  }

<<<<<<< HEAD
=======
  subscribe(id:number){
    
  }

>>>>>>> 80b2ee37776f50605cfdff43f6ebfecb925c5b32
}
