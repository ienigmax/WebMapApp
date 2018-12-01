import { Component, OnInit } from '@angular/core';

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
}
