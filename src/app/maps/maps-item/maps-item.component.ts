import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-item',
  templateUrl: './maps-item.component.html',
  styleUrls: ['./maps-item.component.scss']
})

export class MapsItemComponent {
  title: string = 'Countries around the world';
  lat: number = 51.678418;
  lng: number = 7.909007;
}
