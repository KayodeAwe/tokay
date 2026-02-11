import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-regmsg',
  templateUrl: './regmsg.component.html',
  styleUrls: ['./regmsg.component.css'],
})
export class RegmsgComponent implements OnInit {
  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.titleService.setTitle("Messages - JTLovestory'26");
    this.meta.updateTag({
      name: 'description',
      content:
        'Send your best wishes and messages to Jolayemi & Timileyin on their special day.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'JTLovestory messages, wedding wishes, Jolayemi Timileyin, jtwed.site',
    });
  }

  ngOnInit(): void {}
}
