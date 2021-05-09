import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = [];
  currentPage: string;
  page = new BehaviorSubject<null | string>(null);

  constructor(private router: Router, private location: Location) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.currentPage = (event as NavigationEnd).urlAfterRedirects;
      this.page.next(this.currentPage);
      this.history.push(this.currentPage);
      });
    }

  back(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
