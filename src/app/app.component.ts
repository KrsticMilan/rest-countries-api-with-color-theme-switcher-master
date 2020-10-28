import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';

import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDark: boolean = false;

  constructor(
    private countriesService: CountriesService,
    private overlay: OverlayContainer
  ) { }

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : ''
  }

  ngOnInit(): void {
    this.countriesService.darkModeActive
      .subscribe(darkMode => {
        this.isDark = darkMode
        if (darkMode) {
          this.overlay.getContainerElement().classList.add('theme-dark');
        } else {
          this.overlay.getContainerElement().classList.remove('theme-dark');
        }
      })
  }
}
