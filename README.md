# WorldMapApp

## Introduction
This is a simple app written on Angular Framework that displays a map of the world, and its countries (using Angular Google Maps©) and show some information regarding them.

## How To Use
The panel is devided to 2 parts - the map on the left and the country details side bar on the right. The countries list and the flags are fetched and rendered automatically. You can move freely the map, the markers will place themselves accordingly to the latitude and the lontitude.

To view information regarding a country just click on the small flag (marker icon) - a window will pop up showing the range between the country and the user and the currency used in that country.

On the right side bar you will see the following details:

* Country name
* Capital name
* Region (Continent)
* Latitude and longitude
* Countries population

## Additional Notes
The app might be a bit slow on some devices, as it requests the information through an external API.

Geo-location doesn't work always (and it requires an SSL certificate in order to operate or the app being hosted on localhost), thus the fail-back location is:

* Latitude: 32.3212957
* Longtitude: 34.8568874
The API Key in the repo is invalid - please, use create a one of your own

This project was generated with [ngX-Rocket](https://github.com/ngx-rocket/generator-ngx-rocket/)
version 5.3.0

# Getting started

1. Go to project folder and install dependencies:
 ```sh
 npm install
 ```

2. Launch development server, and open `localhost:4200` in your browser:
 ```sh
 npm start
 ```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.


#### Libraries used

- [Angular](https://angular.io)
- [Axios](https://github.com/axios)
- [Bootstrap 4](https://getbootstrap.com)
- [ng-bootsrap](https://ng-bootstrap.github.io/)
- [Font Awesome](http://fontawesome.io)
- [RxJS](http://reactivex.io/rxjs)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)
