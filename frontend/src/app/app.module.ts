import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './Components/navbar-component/navbar-component.component';
import { MobileNavbarComponent } from './Components/mobile-navbar/mobile-navbar.component';
import { OtherLinesComponent } from './Components/other-lines/other-lines.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
//import { AdminComponent } from './Components/admin/admin.component';
//mport { GiftModalComponent } from './Components/gift-modal/gift-modal.component';
//import { ModalModule } from './_modal/modal.module';
//import { RsvpComponent } from './Components/rsvp/rsvp.component';
//import { GiftsComponent } from './Components/gifts/gifts.component';
//import { ReactiveFormsModule } from '@angular/forms';
//import { MessagesComponent } from './Components/messages/messages.component';
//import { ProgramBookletComponent } from './Components/program-booklet/program-booklet.component';
//import { HeroComponent } from './Components/hero/hero.component';
//import { HomepageRoutingModule } from './Pages/homepage/homepage-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    MobileNavbarComponent,
    OtherLinesComponent,
    PageNotFoundComponent,
    //AdminComponent,
    //GiftModalComponent,
    //RsvpComponent,
    //GiftsComponent,
    //MessagesComponent,
    //HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //ModalModule
  //  HomepageRoutingModule
   // ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
