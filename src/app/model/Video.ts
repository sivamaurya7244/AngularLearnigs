export class VideoModel {
    videoId: number;
    videoUrl: string;
    videoTitle: string;
    videoDescription: string;
    videoThumbnail: string;
    totalDuration: string;

    constructor() {
        this.videoId = 0;
        this.videoUrl = '';
        this.videoTitle = '';
        this.videoDescription = '';
        this.videoThumbnail = '';
        this.totalDuration = '';
    }

}