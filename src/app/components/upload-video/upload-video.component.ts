import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {

  video:Video = new Video();

  constructor(private videoService: VideoService, private router: Router) { }

  ngOnInit() {
  }

  Upload(){
    this.videoService.upload(this.video).subscribe ( (res)=>{
    console.log(res);
    this.router.navigate(['home']);
    });
  }
}
