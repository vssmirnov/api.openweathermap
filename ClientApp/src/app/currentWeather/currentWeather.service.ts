import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class CurrentWeatherService {
    private city: string;
    constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

    getData(): Observable<CurrentWeather> {
        if (this.city) {
            return this.http.get<CurrentWeather>(this.baseUrl + 'api/CurrentWeatherData/CurrentWeather?city=' + this.city).map(response => response);
        }
    }

    changeData(city: string){
        this.city = city;
    }
}