import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/services/channel.service';
import { Router } from '@angular/router';
import { Channel } from 'src/app/models/channel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  // view(id:number){
  //   this.router.navigate(['',id]);
  // }

 
}
