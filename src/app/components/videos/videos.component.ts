import { Component, inject, OnInit } from '@angular/core';
import { VideoService } from '../../service/video.service';
import { VideoModel } from '../../model/Video';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {

  videoList: VideoModel []= [];
  videoScr = inject(VideoService);
  VideoObj: VideoModel = new VideoModel();

  getVideos() {
    this.videoScr.getVideos().subscribe((result: any) => {
      this.videoList = result.data;
      //console.log(result);
    });
  }

  //on click of video 
  ngOnInit(): void {
    this.getVideos();
    
  }

  addVideos(){
    this.videoScr.saveVideos(this.VideoObj).subscribe((result: any) => {
      if(result.result){
        alert('Video Added Successfully');
        this.getVideos();
      }
      else{
        alert('Something went wrong');
      }
    });
  }

  deleteVideos(id: number){
    const isDelete = confirm('Do you want to delete?');
    if(isDelete){
     
      this.videoScr.deleteVideos(id).subscribe((result: any) => {
        if(result.result){
          alert('Video Deleted Successfully');
          this.getVideos();
        }
        else{
          alert('Something went wrong');
        }
      });
    }
    else{
      alert('Video is not deleted');
      console.log('Video is not deleted');
    }

  }

 onEdit(data: VideoModel){
    this.VideoObj = data;
  }

  updateVideos(){
    this.videoScr.updateVideos(this.VideoObj).subscribe((result: any) => {
      if(result.result){
        alert('Video Updated Successfully');
        this.getVideos();
      }
      else{
        alert('Something went wrong');
      }
    });
  }

}
