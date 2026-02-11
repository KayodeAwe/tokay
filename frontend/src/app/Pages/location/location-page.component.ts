import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-location-page',
  template: '<app-location></app-location>',
})
export class LocationPageComponent implements OnInit {
  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.titleService.setTitle("Location - JTLovestory'26");
    this.meta.updateTag({
      name: 'description',
      content:
        "Find the wedding venue for Jolayemi & Timileyin's celebration on February 14, 2026. Get directions to the ceremony.",
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'JTLovestory location, wedding venue, Jolayemi Timileyin, jtwed.site, wedding directions',
    });
  }

  ngOnInit(): void {}
}
