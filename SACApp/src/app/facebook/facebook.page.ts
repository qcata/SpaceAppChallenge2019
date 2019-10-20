import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.page.html',
  styleUrls: ['./facebook.page.scss'],
})
export class FacebookPage implements OnInit {

  title: string;
  description: string;

  constructor(
    private social: SocialSharing
  ) { }

  ngOnInit() {
  }
  share(form: NgForm) {
    console.log(form.value.title, form.value.description);
    this.social.share(form.value.title, form.value.description).
    then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });
  }
}
