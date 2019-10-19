import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-trashlist',
  templateUrl: './trashlist.page.html',
  styleUrls: ['./trashlist.page.scss'],
})
export class TrashlistPage implements OnInit {

  constructor(private socialSharing: SocialSharing) { }

  ngOnInit() {
  }

  share(){
    this.socialSharing.shareViaFacebook('public_profile', 'user_friends', 'email')
    .then((res: SocialSharing) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
  }


}
