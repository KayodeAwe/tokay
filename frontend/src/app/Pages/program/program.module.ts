import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramRoutingModule } from './program-routing.module';
import { ProgComponent } from './prog/prog.component';
import { ProgramBookletComponent } from 'src/app/Components/program-booklet/program-booklet.component';
//import { OtherLinesComponent } from 'src/app/Components/other-lines/other-lines.component';


@NgModule({
  declarations: [
    ProgComponent,
    ProgramBookletComponent,
    //OtherLinesComponent
  ],
  imports: [
    CommonModule,
    ProgramRoutingModule
  ]
})
export class ProgramModule { }
