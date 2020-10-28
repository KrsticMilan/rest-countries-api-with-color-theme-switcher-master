import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from '../home/components/search/search.component';
import { CardComponent } from '../home/components/card/card.component';
import { ErrorComponent } from './components/error/error.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent, SearchComponent, CardComponent, ErrorComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
})
export class HomeModule {}
