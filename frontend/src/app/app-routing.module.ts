import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path:'', loadChildren : () => import('./Pages/homepage/homepage.module').then(mod => mod.HomepageModule)
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
  },
  {
    path: 'home', redirectTo: '/', pathMatch: 'full'
  },
  /**
  {
    path:"**", component:PageNotFoundComponent
  }
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
