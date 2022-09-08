import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './Components/navbar-component/navbar-component.component';
import { MobileNavbarComponent } from './Components/mobile-navbar/mobile-navbar.component';
//import { ProgramBookletComponent } from './Components/program-booklet/program-booklet.component';
//import { HeroComponent } from './Components/hero/hero.component';
//import { HomepageRoutingModule } from './Pages/homepage/homepage-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    MobileNavbarComponent,
    //HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  //  HomepageRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
