import { Component, inject } from '@angular/core';
import { VideoModel } from '../../model/Video';
import { VideoService } from '../../service/video.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-video-master',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './video-master.component.html',
  styleUrl: './video-master.component.css'
})
export class VideoMasterComponent {
  videoList: VideoModel []= [];
    videoScr = inject(VideoService);

    videoform : FormGroup = new FormGroup({
      VideoId : new FormControl(0),
      VideoUrl : new FormControl(''),
      VideoTitle : new FormControl(''),
      VideoDescription : new FormControl(''),
      VideoThumbnail : new FormControl(''),
      totalDuration : new FormControl(''),
    });
  
    getVideos() {
      this.videoScr.getVideos().subscribe((result: any) => {
        this.videoList = result.data;
       // console.log(result);//showing the data in console
      });
    }
  
    //on click of video 
    ngOnInit(): void {
      this.getVideos();
      
    }
  
    addVideos(){

      const FormsValue = this.videoform.value;
      this.videoScr.saveVideos(FormsValue).subscribe((result: any) => {
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
