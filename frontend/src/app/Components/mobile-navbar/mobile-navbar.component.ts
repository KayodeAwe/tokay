import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css'],
  outputs : ['SwitchHome', 'SwitchProgram', 'SwitchMessage', 'SwitchGift', 'SwitchRsvp']
})
export class MobileNavbarComponent implements OnInit {

  constructor(private route:Router) { }
  dataGift = false;
  dataRegister = false;
  dataProgram = false;
  dataHome = false;

  SwitchValue = true;

  public SwitchHome = new EventEmitter();
  public SwitchProgram = new EventEmitter();
  public SwitchMessage = new EventEmitter();
  public SwitchGift = new EventEmitter();
  public SwitchRsvp = new EventEmitter();

  ngOnInit(): void {
  }

  directHome(){
    this.route.navigate(['/home'])
    this.dataGift = false;
    this.dataRegister = false;
    this.dataProgram = false;
    this.dataHome = true;
    this.SwitchHome.emit();
  }
  directHomeSwitch(){
    this.dataGift = false;
    this.dataRegister = false;
    this.dataProgram = false;
    this.dataHome = true;
  }

  directProgram(){
    this.route.navigate(['/program'])
    this.dataGift = false;
    this.dataRegister = false;
    this.dataProgram = true;
    this.dataHome = false;
    this.SwitchProgram.emit();
  }
  directProgramSwitch(){
    this.dataGift = false;
    this.dataRegister = false;
    this.dataProgram = true;
    this.dataHome = false;
  }




  directMessage(){
    this.route.navigate(['/register'])
    this.dataGift = false;
    this.dataRegister = true;
    this.dataProgram = false;
    this.dataHome = false;
    this.SwitchMessage.emit();
  }

  directMessageSwitch(){
    this.dataGift = false;
    this.dataRegister = true;
    this.dataProgram = false;
    this.dataHome = false;
  }


  directGifts(){
    this.route.navigate(['/gift'])
    this.dataGift = true;
    this.dataRegister = false;
    this.dataProgram = false;
    this.dataHome = false;
    this.SwitchGift.emit()
  }
  directGiftsSwitch(){
    this.dataGift = true;
    this.dataRegister = false;
    this.dataProgram = false;
    this.dataHome = false;
  }



  directRsvp(){
    this.dataGift = false;
    this.dataRegister = false;
    this.dataProgram = false;
    this.dataHome = false;
  }

}
