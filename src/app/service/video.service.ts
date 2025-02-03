import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoModel } from '../model/Video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  apiURL: string = 'https://projectapi.gerasim.in/api/OnlineLearning/'
  constructor(private http: HttpClient) { }

  getVideos() {
    
    return this.http.get(this.apiURL + 'GetAllVideos');
  }

  saveVideos(obj: VideoModel) {
    return this.http.post(this.apiURL + 'AddNewVideo', obj);
  }

  deleteVideos(Videoid: number) {
    return this.http.delete(this.apiURL + 'DeleteVideo' + '?Videoid='+ Videoid);
  }

  updateVideos(obj: VideoModel) {
    return this.http.put(this.apiURL + 'UpdateVideo', obj);
  }

}
