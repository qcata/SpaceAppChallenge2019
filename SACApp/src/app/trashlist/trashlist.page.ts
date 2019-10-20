import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { TrashlistService } from './trashlist.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { OptionListComponent } from './option-list/option-list.component';


@Component({
  selector: 'app-trashlist',
  templateUrl: './trashlist.page.html',
  styleUrls: ['./trashlist.page.scss'],
})
export class TrashlistPage implements OnInit {
  public trashlist = [
    {
      imageLink:'https://static.thenounproject.com/png/43279-200.png',
      trashName: 'Cigarette',
      points: 1
    },
    {
      imageLink:'https://static.thenounproject.com/png/20716-200.png',
      trashName: 'Food Wrappers',
      points: 1
    },
    {
      imageLink:'https://icon-library.net/images/water-bottle-icon-png/water-bottle-icon-png-14.jpg',
      trashName: 'Plastic Bottle',
      points: 1
    },
    {
      imageLink:'https://library.kissclipart.com/20180830/bye/kissclipart-soft-drink-clipart-fizzy-drinks-coca-cola-1907d73f1a6a0de2.png',
      trashName: 'Cans',
      points: 1
    },
    {
      imageLink:'https://icon-library.net/images/straw-icon/straw-icon-22.jpg',
      trashName: 'Straw',
      points: 1
    },
    {
      imageLink:'https://cdn2.iconfinder.com/data/icons/waste-management-and-recycling/64/plastic_bag-512.png',
      trashName: 'Plastic bags',
      points: 1
    },
    {
      imageLink:'https://cdn2.iconfinder.com/data/icons/food-solid-icons-volume-1/128/045-512.png',
      trashName: 'Plates',
      points: 1
    },
    {
      imageLink:'http://pngimages.net/sites/default/files/trash-logo-png-image-83522.png',
      trashName: 'Other',
      points: 1
    }

  ];
  trashList = this.trashlist;
  halfLength = Math.ceil(this.trashList.length / 2);
  leftSide = this.trashlist.splice(0, this.halfLength);
  rightSide = this.trashlist.splice(0, this.trashList.length);



  score: number;

  constructor(
    private socialSharing: SocialSharing,
    public popoverController: PopoverController
  ) { }
  ngOnInit() {
    if (!localStorage.getItem('number')) {
      this.score = 0;
      localStorage.setItem('number', this.score.toString());
    } else {
      this.score = parseInt(localStorage.getItem('number'));
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: OptionListComponent,
      event: ev,
      translucent: true
    });
   // localStorage.removeItem('number');
    return await popover.present();
  }
  // share(){
  //   this.socialSharing.shareViaFacebook('public_profile', 'user_friends', 'email')
  //   .then((res: SocialSharing) => console.log('Logged into Facebook!', res))
  //   .catch(e => console.log('Error logging into Facebook', e));
  // }

share() {
  window.open('https://www.facebook.com/sharer/sharer.php?u={{gfdss}}');
}


}