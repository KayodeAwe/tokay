import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prog',
  templateUrl: './prog.component.html',
  styleUrls: ['./prog.component.css'],
})
export class ProgComponent implements OnInit {
  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.titleService.setTitle("Program - JTLovestory'26");
    this.meta.updateTag({
      name: 'description',
      content:
        "Wedding program for Jolayemi & Timileyin's celebration on February 14, 2026. View or download the program booklet.",
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'JTLovestory program, wedding program, Jolayemi Timileyin, jtwed.site, February 2026',
    });
  }

  ngOnInit(): void {}
}
