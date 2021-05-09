import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api-service/api.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit, OnDestroy {
  country: string;
  countryData: any;
  apiSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) {
    this.country = this.route.snapshot.paramMap.get('country');
    this.apiSubscription = this.api.searchCountry(this.country)
      .subscribe(
        (response) => {
          console.log(response);
          this.countryData = response[0];
        },
        () => {
        this.router.navigate(['page-not-found']);
        }
      );
    }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe();
  }
}
