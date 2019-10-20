import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrashlistService {

  public score: number;

  constructor() { }

  setScore(score: number) {
    this.score += score;
    
    localStorage.setItem('score', this.score.toString());
  }

  getScore() {
    return this.score;
  }

}
