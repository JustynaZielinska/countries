import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountry } from '../../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient){}

  public searchCountries(region: string): Observable<object> {​
    return this.httpClient.get(
      `https://restcountries.eu/rest/v2/region/${region}`
    );
  }

  public searchCountry(country: string): Observable<ICountry> {​
    return this.httpClient.get<ICountry>(
      `https://restcountries.eu/rest/v2/name/${country}?fields=name;flag;capital;population;area`
    );
  }
}
