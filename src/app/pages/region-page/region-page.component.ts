import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api-service/api.service';

@Component({
  selector: 'app-region-page',
  templateUrl: './region-page.component.html',
  styleUrls: ['./region-page.component.scss']
})
export class RegionPageComponent implements OnInit, OnDestroy {
region: string;
countries: object;
apiSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) {
    this.region = this.route.snapshot.paramMap.get('region');
    this.apiSubscription = this.api.searchCountries(this.region)
      .subscribe(
        (response) => {
          this.countries = response;
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
