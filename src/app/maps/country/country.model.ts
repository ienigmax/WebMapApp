export class Country {
    public name: string;
    public lat: number;
    public lng: number;
    public icon: string;
    public currency: string;

    constructor(name: string, lat: number, lng: number, icon: string, currency: string) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.icon = icon;
        this.currency = currency;
    }
}