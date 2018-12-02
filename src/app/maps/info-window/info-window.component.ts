import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.scss']
})
export class InfoWindowComponent implements OnInit {

    @Input()
    label: string;

    @Input()
    capital: string;

    @Input()
    region: string;

    @Input()
    latitude: number;

    @Input()
    longtitude: number;

    @Input()
    flag: string;

  constructor() { }

  ngOnInit() {
  }

}
