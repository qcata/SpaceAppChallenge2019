import { Component, OnInit } from '@angular/core';
import { TrashlistService } from '../trashlist.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.scss'],
})
export class OptionListComponent implements OnInit {

  scoreString: string;
  scoreNumber: number;
  sc: any;
  numberOfItem;
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
    public trashlistService: TrashlistService
  ) { }

  ngOnInit() { }

  setPrice(form: NgForm) {
    if (form.value.id === 1 || form.value.id === 1) {
      this.scoreString = form.value.range.splice('-');
      console.log(this.scoreString);
    }
  }
  setBadge() {
    this.score = this.sc;
  }

  collect() {
    console.log('sus');

    this.localStorageScore = parseInt(localStorage.getItem('number'));
    localStorage.clear();
    this.localStorageScore +=  this.sc;
    localStorage.setItem('number', this.localStorageScore.toString());
    console.log('gd');
  }

}
