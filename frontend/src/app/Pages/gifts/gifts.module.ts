import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiftsRoutingModule } from './gifts-routing.module';
import { GiftpageComponent } from './giftpage/giftpage.component';


@NgModule({
  declarations: [
    GiftpageComponent
  ],
  imports: [
    CommonModule,
    GiftsRoutingModule
  ]
})
export class GiftsModule { }
