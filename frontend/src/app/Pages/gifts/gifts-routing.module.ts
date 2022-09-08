import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftpageComponent } from './giftpage/giftpage.component';

const routes: Routes = [
  {
    path:'', component:GiftpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiftsRoutingModule { }
