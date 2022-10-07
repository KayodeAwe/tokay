import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  timer1: any;
  slider:number = 0;

  private track = new Audio()

  reset_slider(){
    this.slider = 0;
  }

  audio_url = '../../../../assets/music/tokayLove.mp3'
  load_track() {

    if (this.audio_url) {
      clearInterval(this.timer1);
      this.reset_slider();
  
      this.track.src = this.audio_url;
      this.track.load();
      this.track.volume = 0.5;
      this.playsong();
  
      this.timer1 = setInterval(() => {
      }, 1000);
  
    }
  }

  playsong(){
    this.track.play();
  }

  ngOnInit(): void {
    this.load_track()
  }

  ngOnDestroy() {
    this.pausesong()
  }

  pausesong(){
    this.track.pause();
  }

}
