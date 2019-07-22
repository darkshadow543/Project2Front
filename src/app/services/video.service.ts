import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../models/video';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  serverUrl = "http://localhost:8090/videos/"

  constructor(private http: HttpClient, private router: Router) { }

  list(){
    return this.http.get<Video[]>(this.serverUrl + "getall");
  }

  upload(video:Video){
    console.log("user service print out" + video);
    return this.http.post( this.serverUrl + 'upload', video );
  }


  delete(id:number){
    return this.http.delete( this.serverUrl + "delete/"+ id);
  }

  findOne(id:number){
    return this.http.get<Video>( this.serverUrl + "get/"+ id);
  }  
}

