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
    this.socialSharing.shareViaFacebook("you has x points","arraylike string","url");
  }


}
