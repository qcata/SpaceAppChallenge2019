import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { IonicModule } from '@ionic/angular';

import { FacebookPage } from './facebook.page';

const routes: Routes = [
  {
    path: '',
    component: FacebookPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FacebookPage],
  providers: [SocialSharing]
})
export class FacebookPageModule {}
