import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginguardGuard } from './Guards/loginguard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full',  },
  { path: 'home', canActivate: [LoginguardGuard], loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'status', loadChildren: './status/status.module#StatusPageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'login', loadChildren: () => import('./authentication/login/login.module').then( m => m.LoginPageModule)},


  { path: 'register', loadChildren: './authentication/register/register.module#RegisterPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
