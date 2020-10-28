import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { Country } from '../../shared/models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  selectedRegion = new Subject<string>(); //new service
  darkModeActive = new EventEmitter<boolean>(); //

  fetchAllCoutries() {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
  }

  fetchCountriesByRegion(region: string) {
    return this.http.get<Country[]>(
      `https://restcountries.eu/rest/v2/region/${region}`
    );
  }

  fetchCountriesByName(name: string) {
    return this.http.get<Country[]>(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
  }

  fetchCountryByName(name: string) {
    return this.http.get<Country>(
      `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
    );
  }

  fetchCountryByCode(code: string) {
    return this.http.get<Country>(
      `https://restcountries.eu/rest/v2/alpha/${code}`
    );
  }
}
