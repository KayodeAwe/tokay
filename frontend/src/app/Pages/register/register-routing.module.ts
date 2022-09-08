import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegmsgComponent } from './regmsg/regmsg.component';

const routes: Routes = [
  { path: '', component: RegmsgComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
