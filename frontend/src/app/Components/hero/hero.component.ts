import { Component, OnInit } from '@angular/core';
import { YoutubeLService } from 'src/app/Services/youtube-l.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private youtubeService: YoutubeLService) { }

  url_id = "631e326c5105db0ae3011142"

  linkToLiveBroadcast = "";

  ngOnInit(): void {
    this.youtubeService.getNewSingleAudioFile(this.url_id).subscribe(res =>{
      this.linkToLiveBroadcast = res.youtubeUrl
    })
  }

  gotoLink(){
    console.log(this.linkToLiveBroadcast)
    window.open(this.linkToLiveBroadcast, "_blank");
  }

  

}
