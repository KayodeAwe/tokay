import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiftsRoutingModule } from './gifts-routing.module';
import { GiftpageComponent } from './giftpage/giftpage.component';
import { GiftsComponent } from 'src/app/Components/gifts/gifts.component';
import { GiftModalComponent } from 'src/app/Components/gift-modal/gift-modal.component';


@NgModule({
  declarations: [
    GiftpageComponent,
    GiftsComponent,
    GiftModalComponent
  ],
  imports: [
    CommonModule,
    GiftsRoutingModule,
  ]
})
export class GiftsModule { }
