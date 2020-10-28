import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"]

  constructor() { }

  @Output() selectedRegion = new Subject<string>();
  @Output() countryName = new Subject<string>();

  ngOnInit(): void { }

  filterCountriesByRegion(region: string): void {
    this.selectedRegion.next(region);
  }

  filterCountriesByName(name): void {
    this.countryName.next(name.value)
  }
}
