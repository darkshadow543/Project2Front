import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from 'src/app/services/channel.service';
import { Channel } from 'src/app/models/channel';

@Component({
  selector: 'app-viewer-specific-channel',
  templateUrl: './viewer-specific-channel.component.html',
  styleUrls: ['./viewer-specific-channel.component.css']
})
export class ViewerSpecificChannelComponent implements OnInit {

  id:number;
  paramsub:any;
  channel:Channel;
  constructor(private activatedRoute: ActivatedRoute, private channelService:ChannelService) { }

  ngOnInit() {
    this.paramsub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
    this.getChannel(this.id);
    console.log(this.channel);
  }

  ngOnDestroy() {
    this.paramsub.unsubscribe();
  }

  getChannel(id:number) {
    this.channelService.findOne(id).subscribe((res) => {
      this.channel=res;
      console.log(res);
    });
  }

}
