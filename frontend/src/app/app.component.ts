import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { MobileNavbarComponent } from './Components/mobile-navbar/mobile-navbar.component';
import { NavbarComponentComponent } from './Components/navbar-component/navbar-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'tokay';

  currentRoute: string = '';

  constructor(private router:Router){
    this.currentRoute = "Demo";
    this.router.events.subscribe((event: Event) => {

        if (event instanceof NavigationEnd) {
            this.currentRoute = event.url;
              //console.log(this.currentRoute);
              if(this.currentRoute == ""){
                this.onTopNavSwitchHome()
              }else if(this.currentRoute == "/program"){
                this.onRefreshProgram()
              }else if(this.currentRoute == "/register"){
                this.onRefreshMessage()

              }else if(this.currentRoute == "/gift"){
                this.onRefreshGifts();
              }else if(this.currentRoute =='/rsvp'){
                this.switchOnRsvpInTopNav()
              }
        }
    });
  }

  ngAfterViewInit(): void{

  }

  onSwitchHome(){
    this.topnav?.directHome();
  }
  onSwitchProgram(){
    this.topnav?.directProgram();
  }
  onSwitchMessage(){
    this.topnav?.directMessage();
    console.log("From Register")
  }
  onSwitchGift(){
    this.topnav?.directGifts()
  }


  onTopNavSwitchHome(){
   this.mobileNav?.directHomeSwitch()
  }

  onRefreshMessage(){
    this.mobileNav?.directMessageSwitch()
  }

  onRefreshProgram(){
    this.mobileNav?.directProgramSwitch()
  }

  onRefreshGifts(){
    this.mobileNav?.directGiftsSwitch()
  }

  onTopNavSwitchRsvp(){
    this.mobileNav?.directRsvp()
  }

  switchOnRsvpInTopNav(){
    this.topnav?.SwitchRsvp()
  }

  @ViewChild(MobileNavbarComponent)
  mobileNav:MobileNavbarComponent | undefined;

  @ViewChild(NavbarComponentComponent)
    topnav:NavbarComponentComponent  | undefined;


}
