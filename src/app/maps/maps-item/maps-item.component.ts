import { Component, OnInit } from '@angular/core';
import { CountryService } from '@app/maps/country/country.service';
import { GeoService } from '@app/maps/geo/geo.service';

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
  geo: GeoService;

  constructor () {
      this.getCurrentPosition().then(() => {
          this.setMarkers().then();
      });
  }

    markerDragEnd($event: MouseEvent) {
        this.lat = $event.coords.lat;
        this.lng = $event.coords.lng;
    }

  private async setMarkers() {
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
                  druggable: false,
                  range: GeoService.calculateDistance(this.lat, countries[i].lat, this.lng, countries[i].lng)
              });
          }
      }, 2000);
  }

  private getCurrentPosition() {
    return new Promise((res, rej) => {
        this.geo = new GeoService;
        setTimeout(() => {
            res(this.geo.getPositionByApi());
        }, 0);
    }).then((cords) => {
        this.lat = cords.lat;
        this.lng = cords.lng;
    });
  }
}

interface marker {
    currency: string;
    icon: string;
    lat: number;
    lng: number;
    label?: string;
    druggable: boolean;
    range: number;
}
