import { Country } from './country.model';
import axios from 'axios';

export class CountryService {
    public static countries: Country[] = [];

    public static getCountries () {
        return CountryService.countries;
    }

    public static fetchCountriesApi = async () => {
        const options = {
            url: 'https://restcountries.eu/rest/v2/all',
            method: 'GET',
        };

        let response =  await axios(options).then((result) => {
            return result.data;
        }).catch((err) => {
            console.error(err.message);
        });

        for (let i in response) {
            (CountryService.countries).push(new Country(response[i].name, response[i].latlng[0], response[i].latlng[1], response[i].flag, response[i].currencies[0].name + response[i].currencies[0].symbol));
        }
    }




}
