import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Update these coordinates to your event location
  eventName: string = 'Event Venue';
  eventAddress: string =
    'KT&T Feasting Palace, Wawa Bus-Stop. Behind AP filling Station, Ogun State, Nigeria';

  // Google Maps embed URL with actual coordinates
  mapEmbedUrl: string =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d3.415878076897395!3d6.690243318437645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDEnMjQuOSJOIDPCsDI0JzU3LjIiRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng';

  openInGoogleMaps(): void {
    // Coordinates for directions
    const latitude = 6.690243318437645;
    const longitude = 3.415878076897395;
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
      '_blank',
    );
  }
}
