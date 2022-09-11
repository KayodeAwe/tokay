import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RSVPRoutingModule } from './rsvp-routing.module';
import { RsvpPageComponent } from './rsvp-page/rsvp-page.component';
import { RsvpComponent } from 'src/app/Components/rsvp/rsvp.component';


@NgModule({
  declarations: [
    RsvpPageComponent,
    RsvpComponent
  ],
  imports: [
    CommonModule,
    RSVPRoutingModule
  ]
})
export class RSVPModule { }
