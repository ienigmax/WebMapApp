import { Component, OnInit } from '@angular/core';
import { CountryService } from './country/country.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor() {
    CountryService.fetchCountriesApi().then();
  }

  ngOnInit() {
  }

}
