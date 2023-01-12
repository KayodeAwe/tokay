import { Component, OnInit } from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-prog',
  templateUrl: './prog.component.html',
  styleUrls: ['./prog.component.css']
})
export class ProgComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
    ) {
      this.titleService.setTitle('Program');
      this.meta.addTag({ name: 'description', content: 'Program sheet for tokay wedding holding by September 17, 2023'});
      this.meta.addTag({ name: 'keywords', content: 'Tokay Program, Program sheet, Program'})
    }

  ngOnInit(): void {
  }

}
