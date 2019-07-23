import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-specific-channel',
  templateUrl: './owner-specific-channel.component.html',
  styleUrls: ['./owner-specific-channel.component.css']
})
export class OwnerSpecificChannelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  upload(){
    this.router.navigate(['upload-video']);
  }
}
