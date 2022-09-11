import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  constructor() { }

  CopiedNumber=false;

  kayAccountNumber:string = '0215682650'

  ngOnInit(): void {
  }

  copyTheAccountNumber(){
    navigator.clipboard.writeText(this.kayAccountNumber);
    this.CopiedNumber=true;
    setTimeout(() => this.CopiedNumber=false ,1000);
  }

}
