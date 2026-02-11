import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.titleService.setTitle("Jolayemi & Timileyin Wedding | JTLovestory'26");
    this.meta.updateTag({
      name: 'description',
      content:
        'We are so glad to welcome you to the wedding of Jolayemi & Timileyin. Join us on 14th February 2026 to celebrate our love story!',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'JTLovestory, Jolayemi, Timileyin, wedding, JTwed, jtwed.site, www.jtwed.site, wedding 2026, February wedding',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Jolayemi & Timileyin Wedding | 14.02.2026',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Join us to celebrate the wedding of Jolayemi & Timileyin on 14th February 2026!',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://jtwed.site',
    });
  }

  timer1: any;
  slider: number = 0;
  showWelcomeModal: boolean = true;

  private track = new Audio();

  reset_slider() {
    this.slider = 0;
  }

  audio_url = '../../../../assets/music/tokayLove.mp3';
  load_track() {
    if (this.audio_url) {
      clearInterval(this.timer1);
      this.reset_slider();

      this.track.src = this.audio_url;
      this.track.load();
      this.track.volume = 0.5;
      this.playsong();

      this.timer1 = setInterval(() => {}, 1000);
    }
  }

  playsong() {
    this.track.play();
  }

  ngOnInit(): void {
    // Check if user has already entered the site in this session
    const hasEntered = sessionStorage.getItem('hasEnteredSite');
    if (hasEntered) {
      this.showWelcomeModal = false;
      this.load_track();
    }
  }

  enterSite(): void {
    this.showWelcomeModal = false;
    sessionStorage.setItem('hasEnteredSite', 'true');
    this.load_track();
  }

  ngOnDestroy() {
    this.pausesong();
  }

  pausesong() {
    this.track.pause();
  }
}
