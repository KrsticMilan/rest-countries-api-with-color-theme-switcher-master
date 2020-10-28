import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string = 'Where in the world?';

  constructor(private countriesService: CountriesService) {}

  onDarkModeSwitched({ checked }: MatSlideToggleChange): void {
    this.countriesService.darkModeActive.emit(checked);
  }
}
