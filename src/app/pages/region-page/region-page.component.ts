import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-region-page',
  templateUrl: './region-page.component.html',
  styleUrls: ['./region-page.component.scss']
})
export class RegionPageComponent implements OnInit {
  country: string;
  countries$: Observable<any>;

  constructor(private route: ActivatedRoute) {

    this.countries$ = this.route.snapshot.data.countries;
    console.log(this.countries$)
}
  ngOnInit(): void {
  }
}
