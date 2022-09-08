import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgComponent } from './prog/prog.component';

const routes: Routes = [
  { path: '', component:ProgComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramRoutingModule { }
