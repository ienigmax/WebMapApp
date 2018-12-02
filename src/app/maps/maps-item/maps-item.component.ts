import { Component, OnInit } from '@angular/core';
import { CountryService } from '@app/maps/country/country.service';

@Component({
  selector: 'app-map-item',
  templateUrl: './maps-item.component.html',
  styleUrls: ['./maps-item.component.scss']
})

export class MapsItemComponent {
  title: string = 'Countries around the world';
  zoom: number = 2.3;
  lat: number = 1;
  lng: number = 1;
  markers: marker[] = [];

  constructor () {
      const countries = CountryService.getCountries();
      setTimeout(() => {
          console.log(countries);
          for (let i in countries) {
              (this.markers).push({
                  currency: countries[i].currency,
                  icon: countries[i].icon,
                  lat: countries[i].lat,
                  lng: countries[i].lng,
                  label: countries[i].name,
                  druggable: false
              });
          }
      }, 2000);
  }

  toggleInfoWindow () {

  }

}

interface marker {
    currency: string;
    icon: string;
    lat: number;
    lng: number;
    label?: string;
    druggable: boolean;
}
