import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-i-love-you',
  templateUrl: './i-love-you.component.html',
  styleUrls: ['./i-love-you.component.css']
})
export class ILoveYouComponent implements OnInit {

  private readonly backGroundColor = '#FD9DA4';
  hideButton!: boolean;
  counter: number = 10 ;

  constructor(private router: Router){}

  ngOnInit(): void {
    document.body.style.backgroundColor = this.backGroundColor;
    this.hideButton = true;

    interval(1000).pipe(take(9)).subscribe(() => this.counter -= 1);

    interval(10500).pipe(take(1)).subscribe(() => {
      this.hideButton = false
    });
  }

  exit(){
    this.router.navigateByUrl('')
  }

}
