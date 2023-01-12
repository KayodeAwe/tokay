import { Component, OnInit } from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-rsvp-page',
  templateUrl: './rsvp-page.component.html',
  styleUrls: ['./rsvp-page.component.css']
})
export class RsvpPageComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('RSVP');
    this.meta.addTag({ name: 'description', content: 'We care about how easily you can get information about tokay wedding'});
    this.meta.addTag({ name: 'keywords', content: 'rsvp, rsvp box'})
  }

  ngOnInit(): void {
  }

}
