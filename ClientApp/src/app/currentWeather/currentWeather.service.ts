import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { empty } from 'rxjs/observable/empty'
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';

@Injectable()
export class CurrentWeatherService {    
    constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

    getData(city: string): Observable<Weather> {
        if (city) {
            return this.http
            .get<Weather>(this.baseUrl + 'api/CurrentWeatherData/CurrentWeather?city=' + city)
                .catch((err: HttpErrorResponse) => { console.log('An error occurred:', err.error); return empty<Weather>();});
        }
        return empty<Weather>();
    }
}