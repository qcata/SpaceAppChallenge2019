import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {



  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    },
      1500);
  }
  login() {
    this.router.navigateByUrl('/login');
  }
  status() {
    this.router.navigate(['/status']);
  }
}
