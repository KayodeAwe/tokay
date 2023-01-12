import { Component, OnInit } from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-regmsg',
  templateUrl: './regmsg.component.html',
  styleUrls: ['./regmsg.component.css']
})
export class RegmsgComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('Message');
    this.meta.addTag({ name: 'description', content: 'Send us a good will message tokay wedding'});
    this.meta.addTag({ name: 'keywords', content: 'Tokay Message, Message box, Message'})
   }

  ngOnInit(): void {
  }

}
