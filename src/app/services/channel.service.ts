import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Channel } from '../models/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  serverUrl = "http://localhost:8090/"

  constructor(private http: HttpClient) { }

  create(channel:Channel){
    return this.http.post( this.serverUrl + 'channels', channel );
  }

  list(){
    return this.http.get<Channel[]>(this.serverUrl + "channels");
  }

  delete(channelId:number){
    return this.http.delete( this.serverUrl + "channels/"+ channelId);
  }

  findOne(channelId:number){
    return this.http.get<Channel>( this.serverUrl + "channels/"+ channelId);
  }
  
}
