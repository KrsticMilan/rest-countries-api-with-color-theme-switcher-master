import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CountryDetailsRoutingModule } from './country-details-routing.module';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CountryDetailsComponent],
  imports: [
    CommonModule,
    CountryDetailsRoutingModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
})
export class CountryDetailsModule {}
