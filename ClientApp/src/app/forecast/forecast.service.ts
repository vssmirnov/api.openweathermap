import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { empty } from 'rxjs/observable/empty'
import "rxjs/add/operator/map";

@Injectable()
export class ForecastService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    getData(city: string): Observable<ForecastData> {
        if (city) {
            return this.http
                .get<ForecastData>(this.baseUrl + 'api/ForecastWeatherData/WeatherForecasts?city=' + city)
                .catch((err: HttpErrorResponse) => { console.log('An error occurred:', err.error); return empty<ForecastData>(); });
        }
        return empty<ForecastData>();
    }
}