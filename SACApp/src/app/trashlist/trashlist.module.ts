import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { IonicModule } from '@ionic/angular';

import { TrashlistPage } from './trashlist.page';

const routes: Routes = [
  {
    path: '',
    component: TrashlistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrashlistPage],
  providers: [SocialSharing ]
})
export class TrashlistPageModule {}
