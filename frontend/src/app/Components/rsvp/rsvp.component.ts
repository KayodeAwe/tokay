import { Component, OnInit } from '@angular/core';

interface Contact {
  name: string;
  phone: string;
}

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css'],
})
export class RsvpComponent implements OnInit {
  contacts: Contact[] = [
    { name: 'Joshua', phone: '08072639579' },
    { name: 'Williams', phone: '09126070328' },
    { name: 'Daniel', phone: '08119460111' },
  ];

  whatsappNumber = '2348072639579';

  constructor() {}

  ngOnInit(): void {}

  callContact(phone: string): void {
    window.location.href = `tel:+234${phone.substring(1)}`;
  }

  openWhatsApp(): void {
    window.open(`https://wa.me/${this.whatsappNumber}`, '_blank');
  }
}
