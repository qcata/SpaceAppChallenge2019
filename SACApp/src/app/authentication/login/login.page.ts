import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Models/UserModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User = new User();
  public loginWarning: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  Login(user: NgForm) {
    console.log(this.authenticationService.login(user.value.username, user.value.password));
    if (this.authenticationService.login(user.value.username, user.value.password)) {
      localStorage.setItem('user', user.value.username);
      this.route.navigate(['/trashlist']);
    }
    this.loginWarning = true;
  }

}
