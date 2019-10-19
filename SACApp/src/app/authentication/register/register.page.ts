import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/UserModel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  Register(user: NgForm) {

  }

}
