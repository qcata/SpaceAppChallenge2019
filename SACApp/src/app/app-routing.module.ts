import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginguardGuard } from './Guards/loginguard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full',  },
  { path: 'home', canActivate: [LoginguardGuard], loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'status', loadChildren: './status/status.module#StatusPageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'login', loadChildren: () => import('./authentication/login/login.module').then( m => m.LoginPageModule)},
 //  { path: 'trashlist', loadChildren: './trashlist/trashlist.module#TrashlistPageModule' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },


  { path: 'register', loadChildren: './authentication/register/register.module#RegisterPageModule' },
  { path: 'information', loadChildren: './information/information.module#InformationPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
