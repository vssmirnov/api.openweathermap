import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of'
import "rxjs/add/operator/map";

@Injectable()
export class ForecastService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    getData(city: string): Observable<WeatherForecast[]> {
        if (city) {
            return this.http.get<WeatherForecast[]>(this.baseUrl + 'api/ForecastWeatherData/WeatherForecasts?city=' + city);
        }
        return of<WeatherForecast[]>([]);
    }
}