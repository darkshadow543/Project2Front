import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelService } from 'src/app/services/channel.service';
import { Channel } from 'src/app/models/channel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-all-channels',
  templateUrl: './view-all-channels.component.html',
  styleUrls: ['./view-all-channels.component.css']
})
export class ViewAllChannelsComponent implements OnInit {

  viewedChannel:Channel;
  constructor(private channelService: ChannelService, private userService: UserService) { }

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

  subscribe(id:number) {
    this.userService.subscribe(id);
  }
}
