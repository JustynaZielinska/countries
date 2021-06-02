import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any>{
  private regionParam: string;
  private countryParam: string;

  constructor(private apiService: ApiService, private router: Router) { }

  public resolve(route: ActivatedRouteSnapshot): any {
    this.regionParam = route.paramMap.get('region');
    this.countryParam = route.paramMap.get('country');

    return {
      getCountriesList: this.apiService.searchCountries(this.regionParam).pipe(catchError(this.handleError.bind(this))),
      getCountryData: this.apiService.searchCountry(this.countryParam).pipe(catchError(this.handleError.bind(this)))
    }
  }

  private handleError(): void {
    this.router.navigate([('not-found')]);
  }
}
