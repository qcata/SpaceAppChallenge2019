import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { TrashlistService } from './trashlist.service';

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


  constructor(
    public modalController: ModalController,
    public trashlistService: TrashlistService,
    public popoverController: PopoverController
  ) { }

  ngOnInit( ) {
    console.log(this.trashlist);
  }

}
