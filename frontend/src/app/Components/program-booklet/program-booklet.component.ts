import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-program-booklet',
  templateUrl: './program-booklet.component.html',
  styleUrls: ['./program-booklet.component.css'],
})
export class ProgramBookletComponent implements OnInit {
  pdfPath = '../../../assets/Program_sheet/Program_booklet_web.pdf';
  desktopImage = '../../../assets/Program_images/Program.png';
  mobileImage = '../../../assets/Program_images/Program_mobile.png';
  currentImage: string;
  isMobile: boolean = false;

  constructor() {
    this.currentImage = this.desktopImage;
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
    this.currentImage = this.isMobile ? this.mobileImage : this.desktopImage;
  }

  openPdf(): void {
    window.open(this.pdfPath, '_blank');
  }

  downloadPdf(): void {
    const link = document.createElement('a');
    link.href = this.pdfPath;
    link.download = 'JTLovestory26_Program.pdf';
    link.click();
  }
}
