export class GeoService {
    protected lat: number = 32.3212957;     // Failback
    protected lng: number = 34.8568874;     // Failback

    public static calculateDistance(lat1: number, lat2: number, long1: number, long2: number){
        let p = 0.017453292519943295;    // Math.PI / 180
        let c = Math.cos;
        let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((long1- long2) * p))) / 2;
        let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
        console.log({dis:dis, lat1:lat1, lat2:lat2, long1: long1, long2: long2});
        return dis;
    }

    constructor() {
        this.fetchPosition();
    }

    public getPositionByApi() {
        return {
            lat: this.lat,
            lng: this.lng
        };
    }

    public setLatitude = async (lat: number) => {
        this.lat = lat;
    }

    public setLongtitude = async (lng: number) => {
        this.lng = lng;
    }

    private fetchPosition = async () => {
        await navigator.geolocation.getCurrentPosition(async (position) => {
            console.log(position.coords);
            await this.setLatitude(position.coords.latitude);
            await this.setLongtitude(position.coords.longitude);
        }, (err) => {
            console.error(err);
        }, {maximumAge: 50000, timeout: 30000, enableHighAccuracy: false});
    }

    private async fetchPositionFromApi() {

    }

}
