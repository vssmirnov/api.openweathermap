import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-current-weather',
    templateUrl: './currentWeather.component.html'
})
export class CurrentWeatherComponent {
    public currentWeather: CurrentWeather;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<CurrentWeather>(baseUrl + 'api/CurrentWeatherData/CurrentWeather?city=Izhevsk').subscribe(result => {
            this.currentWeather = result;
        }, error => console.error(error));
    }
}

interface CurrentWeather {
    city: string;
    temperatureC: number;
}
