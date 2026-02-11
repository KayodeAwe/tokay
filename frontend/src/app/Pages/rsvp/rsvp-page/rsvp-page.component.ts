import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rsvp-page',
  templateUrl: './rsvp-page.component.html',
  styleUrls: ['./rsvp-page.component.css'],
})
export class RsvpPageComponent implements OnInit {
  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.titleService.setTitle("RSVP - JTLovestory'26");
    this.meta.updateTag({
      name: 'description',
      content:
        "RSVP for Jolayemi & Timileyin's wedding on February 14, 2026. Contact us for any inquiries about the celebration.",
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'JTLovestory RSVP, wedding RSVP, Jolayemi Timileyin wedding contact, jtwed.site',
    });
  }

  ngOnInit(): void {}
}
