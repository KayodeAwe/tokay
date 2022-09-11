import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo: '/home',
    pathMatch : 'full'
  },
  {
    path:'home', loadChildren : () => import('./Pages/homepage/homepage.module').then(mod => mod.HomepageModule)
  },
  {
    path: 'program', loadChildren:() => import('./Pages/program/program.module').then(mod => mod.ProgramModule)
  },
  {
    path : 'register', loadChildren:() => import('./Pages/register/register.module').then(mod => mod.RegisterModule)
  },
  {
    path: 'rsvp', loadChildren:() => import('./Pages/rsvp/rsvp.module').then(mod => mod.RSVPModule)
  },
  {
    path: 'gift', loadChildren:() => import('./Pages/gifts/gifts.module').then(mod => mod.GiftsModule)
  },
  {
    path: 'admin', loadChildren:() => import('./Pages/admin/admin.module').then(mod => mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
