import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
continents: string[];

  constructor() {
    this.continents = [
      'Africa',
      'Americas',
      'Europe',
      'Asia',
      'Oceania'
    ];
  }

  ngOnInit(): void {
  }
}
