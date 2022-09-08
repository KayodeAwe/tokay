import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RsvpPageComponent } from './rsvp-page/rsvp-page.component';

const routes: Routes = [
  {
    path: '', component : RsvpPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RSVPRoutingModule { }
