import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CountriesService } from '../../../../services/countries.service';
import { MatDialog } from '@angular/material/dialog';

import { ErrorComponent } from '../../components/error/error.component';
import { Country } from '../../../../shared/models/country.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries: Country[] = [];
  countriesSlice = [];

  constructor(
    private countriesService: CountriesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchAllCountries();
  }

  fetchCountries(region: string): void {
    if (region === "All") {
      this.fetchAllCountries();
    } else {
      this.fetchCountriesByRegion(region);
    }
  }

  fetchAllCountries(): void {
    this.countriesService.fetchAllCoutries()
      .subscribe((countries: Country[]) => {
        this.countries = countries;
        this.getCountriesSlice();
      });
  }

  fetchCountriesByRegion(region: string): void {
    this.countriesService.fetchCountriesByRegion(region)
      .subscribe((countries: Country[]) => {
        this.countries = countries;
        this.getCountriesSlice();
      });
  }

  fetchCountriesByName(name: string): void {
    this.countriesService.fetchCountriesByName(name)
      .subscribe((countries: Country[]) => {
        this.countries = countries;
        this.getCountriesSlice();
      },
        error => {
          this.dialog.open(ErrorComponent);
          console.log(error)
        })
  }

  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.countries.length) {
      endIndex = this.countries.length
    }
    this.countriesSlice = this.countries.slice(startIndex, endIndex);
  }

  getCountriesSlice(): void {
    this.countriesSlice = this.countries.slice(0, 10);
  }
}
