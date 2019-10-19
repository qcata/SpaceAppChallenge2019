import { Component, OnInit } from '@angular/core';
import { InformationsService } from './informations.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
})
export class InformationsPage implements OnInit {

  informationList;

  constructor(private informationsService: InformationsService) { }



  ngOnInit() {
    this.informationList = this.informationsService.getInformations();
    console.log(this.informationList);
  }

  

}
