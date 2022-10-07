import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  constructor() { }

  CopiedNumber = false;
  CopiedTobiNumber = false;

  kayAccountNumber:string = '0215682650'
  TobiAccountNumber:string = '0696642993'

  ngOnInit(): void {
  }

  copyTheAccountNumber(){
    navigator.clipboard.writeText(this.kayAccountNumber);
    this.CopiedNumber=true;
    setTimeout(() => this.CopiedNumber=false ,1000);
  }

  copyTobiAccountNumber() {
    navigator.clipboard.writeText(this.TobiAccountNumber);
    this.CopiedTobiNumber = true;
    setTimeout(() => this.CopiedTobiNumber=false ,1000);
  }

}
