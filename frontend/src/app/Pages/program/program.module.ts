import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramRoutingModule } from './program-routing.module';
import { ProgComponent } from './prog/prog.component';
import { ProgramBookletComponent } from 'src/app/Components/program-booklet/program-booklet.component';


@NgModule({
  declarations: [
    ProgComponent,
    ProgramBookletComponent
  ],
  imports: [
    CommonModule,
    ProgramRoutingModule
  ]
})
export class ProgramModule { }
