import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-viewer-specific-video',
  templateUrl: './viewer-specific-video.component.html',
  styleUrls: ['./viewer-specific-video.component.css']
})
export class ViewerSpecificVideoComponent implements OnInit {

  video:Video = new Video();

  constructor(private videoService: VideoService) { }

  ngOnInit() {
  }

  loadVideo(id:number){
    //this.video. = this.videoService.findOne(id);
  }
}
