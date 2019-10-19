import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { LoginguardGuard } from '../Guards/loginguard.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'trashlist',
        children: [
          {
          path: '',
          canActivate: [LoginguardGuard],
          loadChildren: () =>
            import('../trashlist/trashlist.module').then(m => m.TrashlistPageModule),
          }
        ]
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../status/status.module').then(m => m.StatusPageModule)
          }
        ]
      },
      {
        path: 'informations',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../informations/informations.module').then(m => m.InformationsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/trashlist',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/trashlist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
