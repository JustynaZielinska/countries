import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: '<p>Page not found :(</p>',
  styles: ['p { font-size: 1.2rem; text-align:center; color:white; margin: 6rem 0 }']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
