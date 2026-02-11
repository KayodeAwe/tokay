import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationPageComponent } from './location-page.component';
import { LocationComponent } from 'src/app/Components/location/location.component';
import { SafePipe } from 'src/app/pipes/safe.pipe';

@NgModule({
  declarations: [LocationPageComponent, LocationComponent, SafePipe],
  imports: [CommonModule, LocationRoutingModule],
})
export class LocationModule {}
