import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { IonicModule } from '@ionic/angular';

import { TrashlistPage } from './trashlist.page';
import { OptionListComponent } from './option-list/option-list.component';

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
  declarations: [TrashlistPage, OptionListComponent],
  providers: [SocialSharing ],
  entryComponents: [OptionListComponent]
})
export class TrashlistPageModule {}
