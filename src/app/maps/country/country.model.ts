export class Country {
    public name: string;
    public lat: number;
    public lng: number;
    public icon: string;
    public currency: string;
    public capital: string;
    public region: string;
    public population: number;

    constructor(name: string, lat: number, lng: number, icon: string, currency: string, capital: string, region: string, population: number) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.icon = icon;
        this.currency = currency;
        this.capital = capital;
        this.region = region;
        this.population = population;
    }
}