import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationPageComponent } from './location-page.component';

const routes: Routes = [{ path: '', component: LocationPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule {}
