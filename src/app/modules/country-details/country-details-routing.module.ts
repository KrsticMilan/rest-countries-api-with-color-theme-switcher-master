import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryDetailsComponent } from './pages/country-details/country-details.component';

const routes: Routes = [
  { path: '', component: CountryDetailsComponent },
  { path: ':code', component: CountryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryDetailsRoutingModule { }
