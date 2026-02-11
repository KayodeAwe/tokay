import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit, OnDestroy {
  constructor() {}

  // Google Meet URL for live broadcast
  linkToLiveBroadcast = 'https://calendar.app.google/dwnJifLsu7Mwr8FE9';

  // Countdown properties
  eventDate = new Date('2026-02-14T09:00:00');
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  countdownInterval: any;
  isEventPassed: boolean = false;

  // Snackbar properties
  showSnackbar: boolean = false;
  snackbarMessage: string = '';

  // Image slider properties
  desktopBanners: string[] = [
    'assets/Banners/Banner_1.jpg',
    'assets/Banners/Banner_2.jpg',
    'assets/Banners/Banner_3.jpg',
    'assets/Banners/Banner_4.jpg',
  ];
  mobileBanners: string[] = [
    'assets/Banners_mobile/Banner_1_mobile.jpg',
    'assets/Banners_mobile/Banner_2_mobile.jpg',
    'assets/Banners_mobile/Banner_3_mobile.jpg',
    'assets/Banners_mobile/Banner_4_mobile.jpg',
  ];
  bannerImages: string[] = [];
  currentImageIndex: number = 0;
  imagesLoaded: boolean = false;
  slideInterval: any;
  slideDelay: number = 5000; // 5 seconds per image
  isMobile: boolean = false;
  mobileBreakpoint: number = 768;

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.updateCountdown();
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);

    // Check screen size and set appropriate banners
    this.checkScreenSize();
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  checkScreenSize(): void {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= this.mobileBreakpoint;

    // Only reload if screen type changed or first load
    if (wasMobile !== this.isMobile || this.bannerImages.length === 0) {
      this.bannerImages = this.isMobile
        ? this.mobileBanners
        : this.desktopBanners;
      this.imagesLoaded = false;

      // Clear existing interval if any
      if (this.slideInterval) {
        clearInterval(this.slideInterval);
      }

      // Preload the new set of images
      this.preloadImages();
    }
  }

  preloadImages(): void {
    let loadedCount = 0;
    const totalImages = this.bannerImages.length;

    this.bannerImages.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          this.imagesLoaded = true;
          this.startSlider();
        }
      };
      img.onerror = () => {
        loadedCount++;
        console.warn(`Failed to load image: ${src}`);
        if (loadedCount === totalImages) {
          this.imagesLoaded = true;
          this.startSlider();
        }
      };
      img.src = src;
    });
  }

  startSlider(): void {
    // Clear any existing interval first
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    this.slideInterval = setInterval(() => {
      this.nextImage();
    }, this.slideDelay);
  }

  nextImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.bannerImages.length;
  }

  updateCountdown(): void {
    const now = new Date().getTime();
    const eventTime = this.eventDate.getTime();
    const distance = eventTime - now;

    if (distance <= 0) {
      this.isEventPassed = true;
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }

  gotoLink(): void {
    if (!this.isEventPassed) {
      this.showSnackbarMessage(
        'The event will take place on 14th February, 2026 💕',
      );
      return;
    }
    console.log(this.linkToLiveBroadcast);
    window.open(this.linkToLiveBroadcast, '_blank');
  }

  showSnackbarMessage(message: string): void {
    this.snackbarMessage = message;
    this.showSnackbar = true;
    setTimeout(() => {
      this.showSnackbar = false;
    }, 4000);
  }

  closeSnackbar(): void {
    this.showSnackbar = false;
  }
}
