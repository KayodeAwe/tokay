import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RSVPRoutingModule } from './rsvp-routing.module';
import { RsvpPageComponent } from './rsvp-page/rsvp-page.component';


@NgModule({
  declarations: [
    RsvpPageComponent
  ],
  imports: [
    CommonModule,
    RSVPRoutingModule
  ]
})
export class RSVPModule { }
