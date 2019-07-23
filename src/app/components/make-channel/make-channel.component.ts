import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/services/channel.service';
import { Router } from '@angular/router';
import { Channel } from 'src/app/models/channel';
@Component({
  selector: 'app-make-channel',
  templateUrl: './make-channel.component.html',
  styleUrls: ['./make-channel.component.css']
})
export class MakeChannelComponent implements OnInit {

  constructor(private channelService: ChannelService, private router: Router) { }

  ngOnInit() {
  }
  Create(channelName:string){
    let channel:Channel;
    channel.name = channelName;
    this.channelService.create(channel);
  }
}
