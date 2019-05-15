import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of'
import "rxjs/add/operator/map";

@Injectable()
export class CurrentWeatherService {    
    constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

    getData(city: string): Observable<CurrentWeather> {
        if (city) {
            return this.http.get<CurrentWeather>(this.baseUrl + 'api/CurrentWeatherData/CurrentWeather?city=' + city);
        }
        return of<CurrentWeather>({ city: '', temperatureC: 0});
    }
}