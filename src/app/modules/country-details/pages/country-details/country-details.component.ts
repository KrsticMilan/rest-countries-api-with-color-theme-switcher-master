import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../../../services/countries.service';

import { Country } from '../../../../shared/models/country.model';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  country: any = {};
  code: string = '';

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.code = this.route.snapshot.params['code'];
    this.fetchCountryByCode();
  }

  fetchCountryByCode(): void {
    this.countriesService
      .fetchCountryByCode(this.code)
      .subscribe((data: Country) => {
        this.country = data;
        console.log(data);
      });
  }
  back(): void {
    this.location.back();
  }

  fetchBorderCountry(code: string): void {
    this.location.replaceState(`country-details/${code}`);
    this.code = code;
    this.fetchCountryByCode();
  }
}
