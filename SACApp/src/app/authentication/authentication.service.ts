import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';
import { User } from '../Models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user = {
    username: 'a',
    password: 'a'
  };

  constructor() { }

  login(username: string, password: string) {
    console.log(this.user);
    if (this.user.username === username && this.user.password === password ) {
      return true;
    } else {
      return false;
    }
  }
}
