import { Component, OnInit } from '@angular/core';
import { TrashlistService } from '../trashlist.service';
import { NgForm } from '@angular/forms';
import { ViewController } from '@ionic/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.scss'],
})
export class OptionListComponent implements OnInit {

  scoreString: string;
  scoreNumber: number;
  sc: any;

  public scoreProvizoriu;
  numberOfItem = 0;
  // numberOfItems = [
  //   {
  //     id: 1,
  //     range: '10-50'
  //   },
  //   {
  //     id: 2,
  //     range: '50-70'
  //   },
  //   {
  //     id: 3,
  //     range: '>70'
  //   },
  // ];
  localStorageScore: any;
  score: any;
  constructor(
    public trashlistService: TrashlistService,
    public popoverController: PopoverController

  ) { }


  ngOnInit() { }

  setBadge() {
    this.score = this.numberOfItem;
  }

  async collect() {
    this.localStorageScore = parseInt(localStorage.getItem('number'));
    localStorage.removeItem('number');
    this.localStorageScore +=  this.score;
    localStorage.setItem('number', this.localStorageScore.toString());
   // localStorage.setItem('scorProvizoriu', this.sc);
      this.popoverController.dismiss();
  }

  close() {

  }

}
