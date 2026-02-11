import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css'],
})
export class GiftsComponent implements OnInit {
  constructor() {}

  copied = false;

  accountNumber: string = '0250630231';
  accountName: string = 'Eunice Akinware';
  description: string = 'Gifts/Family Support';

  ngOnInit(): void {}

  copyAccountNumber() {
    navigator.clipboard.writeText(this.accountNumber);
    this.copied = true;
    setTimeout(() => (this.copied = false), 2000);
  }
}
