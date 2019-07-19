import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelService } from 'src/app/services/channel.service';
import { Channel } from 'src/app/models/channel';

@Component({
  selector: 'app-view-all-channels',
  templateUrl: './view-all-channels.component.html',
  styleUrls: ['./view-all-channels.component.css']
})
export class ViewAllChannelsComponent implements OnInit {


  constructor(private channelService: ChannelService, private router: Router) { }

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

  subscribe(id:number){

  }

}
