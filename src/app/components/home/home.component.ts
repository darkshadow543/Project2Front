import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/services/channel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private channelService: ChannelService, private router: Router) { }

  ngOnInit() {
  }
  goTo(id:number){
    //this.viewedChannel = this.channelService.findOne(id);
    this.router.navigate(['view-specific-channel']);
  }
}
