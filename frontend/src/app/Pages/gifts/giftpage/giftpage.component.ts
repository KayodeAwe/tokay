import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-giftpage',
  templateUrl: './giftpage.component.html',
  styleUrls: ['./giftpage.component.css'],
})
export class GiftpageComponent implements OnInit {
  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.titleService.setTitle("Gifts - JTLovestory'26");
    this.meta.updateTag({
      name: 'description',
      content:
        'Send a gift to Jolayemi & Timileyin. Support the newlyweds as they begin their journey together.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'JTLovestory gifts, wedding gifts, Jolayemi Timileyin, jtwed.site',
    });
  }

  OpenUpModal = false;
  ngOnInit(): void {}
}
