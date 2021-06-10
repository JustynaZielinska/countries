import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-region-page',
  templateUrl: './region-page.component.html',
  styleUrls: ['./region-page.component.scss']
})
export class RegionPageComponent {
  country: string;
  countries$: Observable<any>;

  constructor(private route: ActivatedRoute) {

    this.countries$ = this.route.snapshot.data.countries.getCountriesList;
  }

}
