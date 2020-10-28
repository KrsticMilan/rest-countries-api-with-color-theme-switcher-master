import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() country;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCounrtyDetails(): void {
    this.router.navigate(['/country-details', this.country.alpha3Code])
  }

}
