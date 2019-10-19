import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { TrashlistService } from './trashlist.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-trashlist',
  templateUrl: './trashlist.page.html',
  styleUrls: ['./trashlist.page.scss'],
})
export class TrashlistPage implements OnInit {
  public trashlist = [
    {
      trashName: 'Cigarette',
      description: 'BlaBla'
    },
    {
      trashName: 'Plastic bottle',
      description: 'BlaBla'
    },
    {
      trashName: 'Straws',
      description: 'BlaBla'
    },
    {
      trashName: 'Cans',
      description: 'BlaBla'
    },
    {
      trashName: 'Glass',
      description: 'BlaBla'
    },
    {
      trashName: 'Plastic bags',
      description: 'BlaBla'
    }
  ];
  trashList = this.trashlist;
  halfLength = Math.ceil(this.trashList.length / 2);
  leftSide = this.trashlist.splice(0, this.halfLength);
  rightSide = this.trashlist.splice(0, this.trashList.length);

  constructor(private socialSharing: SocialSharing) { }
ngOnInit() {
}

  // share(){
  //   this.socialSharing.shareViaFacebook('public_profile', 'user_friends', 'email')
  //   .then((res: SocialSharing) => console.log('Logged into Facebook!', res))
  //   .catch(e => console.log('Error logging into Facebook', e));
  // }

  // share(){
  //   this.socialSharing.shareViaFacebook('public_profile', 'user_friends', 'email')
  //   .then((res: SocialSharing) => console.log('Logged into Facebook!', res))
  //   .catch(e => console.log('Error logging into Facebook', e));
  // }


}
