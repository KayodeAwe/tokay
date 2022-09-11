import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css'],
  outputs : ['TopNavSwitchHome', 'TopNavSwitchProgram', 'TopNavSwitchMessage', 'TopNavSwitchGift', 'TopNavSwitchRsvp']
})
export class NavbarComponentComponent implements OnInit {

  constructor(private route: Router) { }

   data = false;
   Switchdata = false;
   SwitchdataProgram = false;
   SwitchdataRegister = false;
   SwitchdataGifts = false;

  ngOnInit(): void {
  }


  public TopNavSwitchHome = new EventEmitter();
  public TopNavSwitchProgram = new EventEmitter();
  public TopNavSwitchMessage = new EventEmitter();
  public TopNavSwitchGift = new EventEmitter();
  public TopNavSwitchRsvp = new EventEmitter();

  moverUnderline(){
    this.Switchdata = true;
  }
  RemoveUnderline(){
    this.Switchdata = false;
  }

  moverUnderlineProgram(){
    this.SwitchdataProgram =true;
  }
  RemoveUnderlineProgram(){
    this.SwitchdataProgram =false;
  }

  moverUnderlineRegister(){
    this.SwitchdataRegister = true;
  }
  RemoveUnderlineRegister(){
    this.SwitchdataRegister = false;
  }

  moverUnderlineGifts(){
    this.SwitchdataGifts = true;
  }
  RemoveUnderlineGifts(){
    this.SwitchdataGifts = false;
  }


  moveToRsvp(){
    this.route.navigate(['/rsvp'])
    this.data = true;
    this.TopNavSwitchRsvp.emit()
  }
  SwitchRsvp(){
    this.data = true;
  }

  directHome(){
    this.route.navigate(['/home'])
    this.data = false;
    this.TopNavSwitchHome.emit()
  }

  directProgram(){
    this.route.navigate(['/program'])
    this.data = false;
    this.TopNavSwitchProgram.emit()
  }
  directMessage(){
    this.route.navigate(['/register'])
    this.data = false;
    this.TopNavSwitchMessage.emit();
  }
  directGifts(){
    this.route.navigate(['/gift'])
    this.data = false;

    this.TopNavSwitchGift.emit()
  }

}
