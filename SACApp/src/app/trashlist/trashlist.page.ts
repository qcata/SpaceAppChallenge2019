import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-trashlist',
  templateUrl: './trashlist.page.html',
  styleUrls: ['./trashlist.page.scss'],
})
export class TrashlistPage implements OnInit {

  constructor(private socialSharing: SocialSharing) { }

  trashList = [
    {
      name: 'Cigarete'
    },
    {
      name: 'Food wrappers'
    },
    {
      name: 'Beverage botteles'
    },
    {
      name: 'Bags'
    },
    {
      name: 'Caps'
    },
    {
      name: 'Straws'
    },
    {
      name: 'Glass'
    },
    {
      name: 'Can'
    }
  ];

  trashlist = this.trashList;
  halfLength = Math.ceil(this.trashlist.length / 2);

  leftSide = this.trashlist.splice(0, this.halfLength);
  rightSide = this.trashlist.splice(0, this.trashList.length);

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
