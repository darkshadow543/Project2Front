import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewer-specific-channel',
  templateUrl: './viewer-specific-channel.component.html',
  styleUrls: ['./viewer-specific-channel.component.css']
})
export class ViewerSpecificChannelComponent implements OnInit {

  id:number;
  paramsub:any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramsub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
  }

  ngOnDestroy() {
    this.paramsub.unsubscribe();
  }

}
