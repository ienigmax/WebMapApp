export class Country {
    public name: string;
    public lat: number;
    public lng: number;

    constructor(name: string, lat: number, lng: number) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }
}