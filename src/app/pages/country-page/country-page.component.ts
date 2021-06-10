import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICountry } from 'src/app/core/interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent {
  country: string;
  countryData$: Observable<ICountry>;

  constructor(private route: ActivatedRoute) {
  
    this.countryData$ = this.route.snapshot.data.countryData.getCountryData;
  }

}
